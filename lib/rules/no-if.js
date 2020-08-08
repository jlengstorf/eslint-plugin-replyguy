module.exports = {
  create: function (context) {
    return {
      IfExpression(node) {
        context.report({
          node,
          message: `ACK-tually, if-statements are a waste of space. You should use a ternary.`,
        })
      },
    }
  },
}
