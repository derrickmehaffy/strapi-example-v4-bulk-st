module.exports = {
  routes: [
    { // Path defined with a regular expression
      method: 'GET',
      path: '/combined/testAndBlah',
      handler: 'test.combined',
    }
  ]
}
