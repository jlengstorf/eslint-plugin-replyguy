module.exports = {
  create: function (context) {
    function complain(node) {
      context.report({
        node,
        message: `ACK-tually JavaScript is user-hostile and you should never use it`,
      });
    }

    return {
      Program(node) {
        complain(node);
      },
    };
  },
};
