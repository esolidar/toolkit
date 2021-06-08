import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import bundleScss from 'rollup-plugin-bundle-scss';
import copy from 'rollup-plugin-copy-assets';
import json from '@rollup/plugin-json';
// import { visualizer } from 'rollup-plugin-visualizer';
import getFiles from './src/utils/getFiles';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const excludedExtensions = ['.stories.js', '.stories.tsx', '.test.js', '.test.tsx'];

export default {
  input: [
    'src/index.js',
    ...getFiles('src/components', extensions, excludedExtensions),
    ...getFiles('src/constants', extensions, excludedExtensions),
    ...getFiles('src/elements', extensions, excludedExtensions),
    ...getFiles('src/hooks', extensions, excludedExtensions),
    ...getFiles('src/utils', extensions, excludedExtensions),
  ],
  output: [
    {
      dir: 'build',
      format: 'esm',
      preserveModules: true,
      preserveModulesRoot: 'src',
      sourcemap: true,
    },
  ],
  external: [...Object.keys(pkg.devDependencies), ...Object.keys(pkg.dependencies)],
  plugins: [
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
    commonjs(),
    json(),
    copy({
      assets: ['src/assets/'],
    }),
    bundleScss(),
    typescript({ useTsconfigDeclarationDir: true }),
    // visualizer({
    //   filename: 'bundle-analysis.html',
    // }),
  ],
};
