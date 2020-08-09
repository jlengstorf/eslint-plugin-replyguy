module.exports = {
  create: function (context) {
    return {
      BinaryExpression(node) {
        if (node.operator === '!==' || node.operator === '===') {
          context.report({
            node,
            message: `ACK-tually, you should use ${node.operator.substr(
              0,
              2,
            )} because ${node.operator} is overkill.`,
          });
        }
      },
    };
  },
};
