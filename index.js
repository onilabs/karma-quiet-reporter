var BaseReporter = require('karma/lib/reporters/base');
var QuietReporter = function(formatError) {
  BaseReporter.call(this, formatError);

  this.writeCommonMsg = function(msg) {
    this.write(msg + '\n');
  };

  this.onBrowserLog = function(browser, log, type) {
    this.writeCommonMsg(log);
  };

  this.onSpecComplete = this.onBrowserError = function() {};
};

module.exports = {
  'reporter:quiet': ['type', QuietReporter]
};
