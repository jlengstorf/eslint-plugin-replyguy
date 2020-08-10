const create = function (context) {
  function report(node) {
    context.report({
      node,
      message:
        'Well ACK-tually JavaScript classes are an heresy and you should use functional programming instead.'
    })
  }

  return {
    ClassDeclaration: report,
    ClassExpression: report
  }
}

module.exports = {
  create,
  meta: {
    docs: {
      description: 'Forbid the use of `class`.',
      recommended: 'error'
    }
  }
}
