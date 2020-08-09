module.exports = {
  create: function (context) {
    function complain(node) {
      context.report({
        node,
        message: `ACK-tually you should use TypeScript`,
      });
    }

    return {
      Program(node) {
        complain(node);
      },
    };
  },
};
