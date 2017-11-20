import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import json from 'rollup-plugin-json'
import cleanup from 'rollup-plugin-cleanup'

export default {
  input: 'src/index.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife'
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: ['es2015-rollup']
    }),
    cleanup()
  ]
}
