module.exports = {
  create: function (context) {
    return {
      VariableDeclaration(node) {
        if (node.kind === 'const' || node.kind === 'let') {
          context.report({
            node,
            message: `ACK-tually, you should use ${
              node.kind === 'const' ? 'let' : 'const'
            } because ${node.kind} is ${
              node.kind === 'const' ? 'overkill' : 'unsafe'
            }.`,
          })
        }
      },
    }
  },
}
