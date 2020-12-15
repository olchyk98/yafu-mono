import * as production from './dist/es6/fantasy-functions-production'
import * as debug from './dist/es6/fantasy-functions-development'

export default process.env.NODE_ENV === 'production' ? production : debug
