module.exports = {
  create: function (context) {
    function complain(node) {
      context.report({
        node,
        message: `ACK-tually I heard real programmers don't sleep. Sleep is for the weak.`
      })
    }

    return {
      Program(node) {
        complain(node)
      }
    }
  }
}
