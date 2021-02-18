import babel from 'rollup-plugin-babel'
import {terser} from 'rollup-plugin-terser'

const mTerser = () => terser({
    compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true
    }
})

export default [{
  input: 'src/simplified.js',
  output: [{
    file: 'lib/main.js',
    format: 'cjs',
    indent: false
  }, {
    file: 'es/main.js',
    format: 'es',
    indent: false,
    exports: 'default'
  }, {
    file: 'dist/main.js',
    format: 'umd',
    name: 'PinyinMatch'
  }],
  plugins: [
    babel(),
    mTerser()
  ]
}, {
  input: 'src/traditional.js',
  output: [{
    file: 'lib/traditional.js',
    format: 'cjs',
    indent: false
  }, {
    file: 'es/traditional.js',
    format: 'es',
    indent: false,
    exports: 'default'
  }, {
    file: 'dist/traditional.js',
    format: 'umd',
    name: 'PinyinMatch'
  }],
  plugins: [
    babel(),
    mTerser()
  ]
}]