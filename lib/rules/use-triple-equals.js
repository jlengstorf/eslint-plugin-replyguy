module.exports = {
  create: function (context) {
    return {
      BinaryExpression(node) {
        if (node.operator === '!=' || node.operator === '==') {
          context.report({
            node,
            message: `ACK-tually, you should use ${node.operator}= because ${node.operator} is buggy.`,
          });
        }
      },
    };
  },
};
