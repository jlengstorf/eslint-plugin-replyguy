module.exports = {
  rules: {
    'use-triple-equals': {
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
    },
    'use-double-equals': {
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
    },
  },
};
