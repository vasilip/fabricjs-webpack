const path = require('path');

module.exports = {
  entry: './index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  externals: {
    'canvas-prebuilt': 'undefined',
    'canvas': 'undefined',
    'jsdom/lib/jsdom/utils': JSON.stringify({ Canvas: null }),
    'jsdom/lib/jsdom/living/generated/utils': JSON.stringify({ implForWrapper: null }),
    'jsdom': 'null',
    'xmldom': JSON.stringify({ DOMParser: null }),
  },
};
