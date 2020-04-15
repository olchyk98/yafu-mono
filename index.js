module.exports = process.env.NODE_ENV === 'production'
  ? require('./dist/fantasy-functions')
  : require('./dist/fantasy-functions-debug')
