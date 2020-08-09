module.exports = {
  create: function (context) {
    return {
      VariableDeclaration(node) {
        if (node.kind === 'var') {
          context.report({
            node,
            message: `What a simpleton. No one uses var.`,
          })
        }
      },
    }
  },
}
