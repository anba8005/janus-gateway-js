/**
 * @param {Function} callback
 * @param {number} ms
 * @param {Function} timeout
 * @constructor
 */
function Timer(callback, ms, settimeout, cleartimeout) {
  this._callback = callback;
  this._ms = ms;
  this._timeoutId = null;
  this._settimeout = settimeout || setTimeout;
  this._cleartimeout = cleartimeout || clearTimeout;
}

Timer.prototype.start = function() {
  this._timeoutId = this._settimeout(this._callback, this._ms);
};

Timer.prototype.stop = function() {
  if (this._timeoutId) {
    this._cleartimeout(this._timeoutId);
    this._timeoutId = null;
  }
};

Timer.prototype.reset = function() {
  this.stop();
  this.start();
};

module.exports = Timer;
