module.exports = {
  create: function (context) {
    function complain(node) {
      context.report({
        node,
        message: `ACK-tually, real developers only use dark themes.`
      })
    }

    return {
      Program(node) {
        complain(node)
      }
    }
  }
}
