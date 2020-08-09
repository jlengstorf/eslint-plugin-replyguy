module.exports = {
  create: function (context) {
    return {
      FunctionDeclaration(node) {
        context.report({
          node,
          message: 'ACK-tually, we are modern, you should use arrow functions.',
        })
      },
      FunctionExpression(node) {
        context.report({
          node,
          message:
            "ACK-tually, yeah, we're still modern, use arrow functions, even in callbacks.",
        })
      },
    }
  },
}
