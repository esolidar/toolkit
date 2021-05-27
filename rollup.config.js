import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss';
import bundleScss from 'rollup-plugin-bundle-scss';
import scssVariable from 'rollup-plugin-sass-variables';
import json from '@rollup/plugin-json';
import { visualizer } from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';

import { DEFAULT_EXTENSIONS } from '@babel/core';

// const packageJson = require('./package.json');

const extensions = [...DEFAULT_EXTENSIONS, '.ts', '.tsx'];

export default {
  input: ['src/index.ts', 'src/components/userMenu/index.ts', 'src/components/footer/index.js'],
  output: [
    {
      dir: 'build',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  preserveModules: true,
  plugins: [
    peerDepsExternal(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: 'runtime',
      extensions,
      presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-runtime',
        '@babel/plugin-transform-react-jsx',
      ],
    }),
    resolve({ extensions }),
    commonjs(),
    json(),
    bundleScss(),
    // scss(),
    scssVariable(),
    visualizer({
      filename: 'bundle-analysis.html',
    }),
    typescript({ useTsconfigDeclarationDir: true }),
    terser(),
  ],
};
