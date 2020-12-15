module.exports = process.env.NODE_ENV === 'production'
  ? require('./dist/cjs/fantasy-functions-production')
  : require('./dist/cjs/fantasy-functions-development')
