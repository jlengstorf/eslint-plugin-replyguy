module.exports = {
  create: function (context) {
    function complain(node) {
      context.report({
        node,
        message: `What font are you using? 
          Monospaced fonts with ligatures are obviously superior to fonts without them.`
      })
    }

    return {
      Program(node) {
        complain(node)
      }
    }
  }
}
