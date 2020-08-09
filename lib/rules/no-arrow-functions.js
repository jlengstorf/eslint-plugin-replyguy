module.exports = {
  create: function (context) {
    return {
      ArrowFunctionExpression(node) {
        context.report({
          node,
          message: `ACK-tually, regular functions are better and less ambiguous.`,
        })
      },
    }
  },
}
