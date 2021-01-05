export default {
  input: 'index.js',
  treeshake: {
    moduleSideEffects: false,
  },
  output: {
    file: 'dist/cjs/transduce.js',
    format: 'cjs',
  },
}
