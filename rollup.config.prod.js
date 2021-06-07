import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import bundleScss from 'rollup-plugin-bundle-scss';
import json from '@rollup/plugin-json';
import { visualizer } from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';
import getFiles from './src/utils/getFiles';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const excludedExtensions = ['.stories.js', '.stories.tsx', '.test.js', '.test.tsx'];

export default {
  input: [
    'src/index.js',
    'src/index.scss',
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
  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    babel({
      exclude: 'node_modules/**',
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
    bundleScss(),
    visualizer({
      filename: 'bundle-analysis.html',
    }),
    typescript({ useTsconfigDeclarationDir: true }),
    terser(),
  ],
};
