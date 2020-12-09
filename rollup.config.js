import babel from 'rollup-plugin-babel'
import {terser} from 'rollup-plugin-terser'

const mTerser = () => terser({
    compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false,
    }
})

export default {
  input: 'src/index.js',
  output: [{
    file: 'lib/main.js',
    format: 'cjs',
    indent: false
  }, {
    file: 'es/main.js',
    format: 'es',
    indent: false
  }, {
    file: 'dist/main.js',
    format: 'umd',
    name: 'pinyinMatch'
  }],
  plugins: [
    babel(),
    mTerser()
  ]
}