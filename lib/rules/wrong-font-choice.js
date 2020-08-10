module.exports = {
  create: function (context) {
    function complain(node) {
      context.report({
        node,
        message: `ACK-tually, you should use a monospaced fonts with ligatures.`
      })
    }

    return {
      Program(node) {
        complain(node)
      }
    }
  }
}
