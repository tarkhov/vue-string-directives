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
      exports: 'named',
      format: 'cjs'
    },
    {
      file: 'dist/' + name + '.esm.js',
      exports: 'named',
      format: 'es'
    },
    {
      file: 'dist/' + name + '.umd.js',
      exports: 'named',
      name: 'VueStringDirectives',
      format: 'umd'
    },
    {
      file: 'dist/' + name + '.umd.min.js',
      format: 'umd',
      exports: 'named',
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
