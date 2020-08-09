module.exports = {
  create: function (context) {
    return {
      ImportDeclaration(node) {
        context.report({
          node,
          message: `ACK-tually, you should just inline this functionality.`,
        })
      },
    }
  },
}
