import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import reactRefresh from '@vitejs/plugin-react-refresh';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import bundleScss from 'rollup-plugin-bundle-scss';
import copy from 'rollup-plugin-copy-assets';
import json from '@rollup/plugin-json';
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs';
import getFiles from './src/utils/getFiles';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const excludedExtensions = ['.stories.js', '.stories.tsx', '.test.js', '.test.tsx'];

export default defineConfig({
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
  plugins: [reactRefresh()],
  mode: 'development',
  server: {
    hmr: {
      protocol: 'ws',
      port: 3000,
    },
  },
  optimizeDeps: {
    exclude: ['dragula'],
  },
  build: {
    target: ['es2019', 'chrome61', 'edge18', 'firefox60', 'safari16'], // default esbuild config with edge18 instead of edge16
    minify: true,
    brotliSize: true,
    chunkSizeWarningLimit: 20000, // allow compressing large files (default is 500) by slowing the build. Please consider that Brotli reduces bundles size by 80%!
    sourcemap: true,

    rollupOptions: {
      input: [
        'src/index.js',
        ...getFiles('src/components', extensions, excludedExtensions),
        ...getFiles('src/constants', extensions, excludedExtensions),
        ...getFiles('src/elements', extensions, excludedExtensions),
        ...getFiles('src/hooks', extensions, excludedExtensions),
        ...getFiles('src/utils', extensions, excludedExtensions),
        ...getFiles('__mocks__', extensions, excludedExtensions),
        ...getFiles('__customQueries__', extensions, excludedExtensions),
      ],
      output: [
        {
          dir: 'build',
          format: 'cjs',
          preserveModules: true,
          preserveModulesRoot: 'src',
          sourcemap: true,
          entryFileNames: '[name].js',
          manualChunks: undefined,
        },
      ],
      external: [
        ...Object.keys(pkg.devDependencies),
        ...Object.keys(pkg.dependencies),
        /@babel\/runtime/,
      ],
      plugins: [
        viteSingleFile(),
        peerDepsExternal(),
        resolve({ extensions }),
        babel({
          exclude: ['node_modules/**'],
          babelHelpers: 'runtime',
          extensions,
          presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-transform-runtime',
            '@babel/plugin-transform-react-jsx',
          ],
        }),
        typescript({ useTsconfigDeclarationDir: true, rollupCommonJSResolveHack: true }),
        commonjs(),
        json(),
        copy({
          assets: ['src/assets/'],
        }),
        bundleScss(),
        esbuildCommonjs(['@storybook/addon-essentials']),
      ],
      preserveEntrySignatures: 'strict',
    },
  },
});
