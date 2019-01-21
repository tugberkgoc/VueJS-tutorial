const path = require('path');

module.exports = path.dirname(process.mainModule.filename); // does not work properly