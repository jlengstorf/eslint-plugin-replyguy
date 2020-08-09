module.exports = {
  create: function (context) {
    return {
      ConditionalExpression(node) {
        context.report({
          node,
          message: `ACK-tually, you should really stick to if-statements.`,
        })
      },
    }
  },
}
