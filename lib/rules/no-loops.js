module.exports = {
  create: function (context) {
    function complain(node) {
      context.report({
        node,
        message: `ACK-tually you should just use array methods because I read on Stack Overflow that for loops are Bad™`,
      });
    }

    return {
      ForInStatement(node) {
        complain(node);
      },
      ForStatement(node) {
        complain(node);
      },
    };
  },
};
