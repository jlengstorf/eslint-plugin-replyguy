  
const create = function (context) {
  function report(node) {
    context.report({
      node,
      message: 'Well ACK-tually you should consider using classes as object oriented programming is the superior pattern.'
    });
  }

  return {
    FunctionDeclaration: report,
    FunctionExpression: report
  };
};

module.exports = {
  create,
  meta: {
    docs: {
      description: 'Forbid the use of `functions`.',
      recommended: 'error'
    }
  }