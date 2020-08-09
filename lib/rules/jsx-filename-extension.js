'use strict';

const path = require('path');

// Constants extension

const EXTENSION = {
  extensions: ['.jsx']
}

// All rules

const create = function(context) {
  let invalidExtension;
  let invalidNode;

  function getExtensions() {
    return context.options[0] && context.options[0].extensions || EXTENSION.extensions;
  }

  function handleJSX(node) {
    const filename = context.getFileName();
    if(filename === '<text>') {
      return;
    }

    if(invalidNode) {
      return;
    }

    const allowedExtension = getExtensions();
    const isAllowedExtension = allowedExtension.some((extension) => filename.slice(-extension.length) === extension)

    if(isAllowedExtension) {
      return;
    }

    invalidNode = node;
    invalidExtension = path.extname(filename);
  }

  return {
    JSXElement: handleJSX,
    JSXFragment: handleJSX,

    'Program:exit'() {
      if(!invalidNode) {
        return;
      }

      context.report({
        node: invalidNode,
        message: `ACK-tually you shouldn't use JSX inside '${invalidExtension}' file`
      });
    }
  };
}

module.exports = {
  create,
  meta: {
    docs: {
      description: 'Only use jsx inside jsx file',
      recommended: true
    }
  }  
}