
var Fiber = require('fibers');

exports = module.exports = function sleep(ms) {
  var fiber = Fiber.current
  if(!fiber) throw new Error('sleep() must be run from within a fiber, e.g. var Fiber = require(fibers); Fiber(function() { sleep(100); }).run();');
  setTimeout(function() {
    fiber.run()
  }, ms)
  Fiber.yield()
}
