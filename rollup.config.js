import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue'
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
    vue(),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: ['es2015-rollup']
    }),
    cleanup()
  ],
  sourcemap: true
}
