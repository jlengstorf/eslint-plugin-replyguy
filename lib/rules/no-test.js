const DEFAULTS = {
  extensions: ['.test.js','.test.jsx','.spec.js'],
};
module.exports = {
  create: function(context) {
    function getNotAllowedExtensions() {
      return DEFAULTS.extensions;
    }
    const filename = context.getFilename();
    const notAllowedExtensions = getNotAllowedExtensions();
    const isNotAllowedExtension = notAllowedExtensions.some((extension) => filename.slice(-extension.length) === extension);
    if (__dirname.includes('test') || isNotAllowedExtension) {
      return context.report({
        node: node,
        message: `ACK-tually, nobody got time for tests`
      })
    }
  }
}
