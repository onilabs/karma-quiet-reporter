var BaseReporter = require('karma/lib/reporters/base');
var QuietReporter = function(formatError) {
  BaseReporter.call(this, formatError);

  this.writeCommonMsg = function(msg) {
    this.write(msg + '\n');
  };

  this.onBrowserLog = function(browser, log, type) {
    this.writeCommonMsg(log);
  }

  this.onBrowserComplete = function() {
    this.write(this._render());
  };

  this.onRunStart = function() {
    this._browsers = [];
  };

  this.onBrowserStart = function(browser) {
    this._browsers.push(browser);
  };

  this._render = function() {
    return this._browsers.map(this.renderBrowser).join('\n') + '\n';
  };
};

module.exports = {
  'reporter:quiet': ['type', QuietReporter]
};
