if (process.env.NODE_ENV === 'development') {
  require('babel-core/register')
  require('./src')
} else {
  require('./build')
}
