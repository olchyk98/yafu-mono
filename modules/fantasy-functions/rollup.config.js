import resolve from '@rollup/plugin-node-resolve'
import replace from 'rollup-plugin-replace'

const setups = [ 'production', 'development' ]

export default setups.map((name) => ({
  input: './es6.js',
  treeshake: {
    moduleSideEffects: false,
  },
  plugins: [
    replace({ 'process.env.NODE_ENV': `'${name}'` }),
    resolve(),
  ],
  output: {
    exports: 'default',
    file: `dist/cjs/fantasy-functions-${name}.js`,
    format: 'cjs',
  },
}))
