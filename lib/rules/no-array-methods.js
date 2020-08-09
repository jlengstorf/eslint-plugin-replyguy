module.exports = {
  create: function (context) {
    return {
      Identifier(node) {
        if (
          ['reduce', 'map', 'forEach', 'some', 'find', 'every'].includes(
            node.name,
          )
        ) {
          context.report({
            node,
            message: `ACK-tually you should just use a for loop instead of ${node.name} because it’s too complex`,
          });
        }
      },
    };
  },
};
