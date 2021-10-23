(function() {
  require.config({
    baseUrl: '.',
    paths: {
      print: './print',
      math: './math'
    }
  })
  require(['print'], function(print) {
    print.showMsg()
  })
})()