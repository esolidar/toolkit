import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel';
import bundleScss from 'rollup-plugin-bundle-scss';
import copy from 'rollup-plugin-copy-assets';
import json from '@rollup/plugin-json';
// import { visualizer } from 'rollup-plugin-visualizer';
import getFiles from './src/utils/getFiles/getFiles';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const excludedExtensions = ['.stories.js', '.stories.tsx', '.test.js', '.test.tsx'];

export default {
  input: [
    'src/index.js',
    ...getFiles('src/accelerator', extensions, excludedExtensions),
    ...getFiles('src/components', extensions, excludedExtensions),
    ...getFiles('src/constants', extensions, excludedExtensions),
    ...getFiles('src/elements', extensions, excludedExtensions),
    ...getFiles('src/unreleased', extensions, excludedExtensions),
    ...getFiles('src/hooks', extensions, excludedExtensions),
    ...getFiles('src/utils', extensions, excludedExtensions),
    ...getFiles('src/user', extensions, excludedExtensions),
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
    },
  ],
  external: [
    ...Object.keys(pkg.devDependencies),
    ...Object.keys(pkg.dependencies),
    /@babel\/runtime/,
  ],
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
    typescript(),
    commonjs(),
    json(),
    copy({
      assets: ['src/assets/icons', 'src/assets/sass'],
    }),
    postcss({
      plugins: [],
    }),
    bundleScss(),
    // visualizer({
    //   filename: 'bundle-analysis.html',
    // }),
  ],
};
