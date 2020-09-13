import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { name } from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/' + name + '.common.js',
      exports: 'auto',
      format: 'cjs'
    },
    {
      file: 'dist/' + name + '.esm.js',
      format: 'es'
    },
    {
      file: 'dist/' + name + '.umd.js',
      name: 'VueStringDirectives',
      format: 'umd'
    },
    {
      file: 'dist/' + name + '.umd.min.js',
      format: 'umd',
      name: 'VueStringDirectives',
      plugins: [terser()]
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' })
  ]
};
