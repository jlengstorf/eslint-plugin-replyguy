module.exports = {
  create: function (context) {
    function complain(node) {
      context.report({
        node,
        message: `ACK-tually ${node.source.value} is bloated so you should just roll your own it’s like ten lines of code or something`,
      });
    }

    return {
      ImportDeclaration(node) {
        complain(node);
      },
    };
  },
};
