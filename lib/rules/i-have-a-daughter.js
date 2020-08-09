module.exports = {
  create: function (context) {
    function complain(node) {
      context.report({
        node,
        message: `ACK-tually I have a daughter`,
      });
    }

    return {
      Program(node) {
        complain(node);
      },
    };
  },
};
