module.exports = {
  create: function (context) {
    function complain(node) {
      context.report({
        node,
        message: `What theme are you using? 
          Real developers only use dark themes.`
      })
    }

    return {
      Program(node) {
        complain(node)
      }
    }
  }
}
