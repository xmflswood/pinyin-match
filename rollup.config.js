import babel from 'rollup-plugin-babel'
import serve from 'rollup-plugin-serve'
import {terser} from 'rollup-plugin-terser'
const mTerser = () => terser({
    compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true
    }
})
const plugins = [
  babel(),
  mTerser(),
]
if (process.env.NODE_ENV !== 'production') {
  plugins.push(serve({
    port: 8080
  }))
}
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
  plugins
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