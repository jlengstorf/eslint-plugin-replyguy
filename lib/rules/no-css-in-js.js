module.exports = {
  create: function (context) {
    function complain(node) {
      const isCssInJsLib = ['styled-components', 'emotion'].some((lib) =>
        node.source.value.includes(lib)
      )

      if (isCssInJsLib) {
        context.report({
          node,
          message: `ACK-tually you shouldn't write CSS. It's not a real programming language.`
        })
      }
    }

    return {
      ImportDeclaration(node) {
        complain(node)
      }
    }
  }
}
