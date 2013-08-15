
// The module candybar wrapper.
(function (name, mod) {
  if (typeof exports == 'object' && typeof module == 'object') return mod(exports); // CommonJS
  if (typeof define == 'function' && define.amd) return define(['exports'], mod); // AMD
  mod(this[name] || (this[name] = {})); // Plain browser env
})('snippets', function (exports) {

  // Redable English relative dates.
  exports.timeDelta = function timeDelta (d) {
    d = Date.parse(d);
    if (!d) return 'unknown';
    d = (Date.now() - d) / 1000 | 0;
    // Is the date in the future or past?
    var suffix = d < 0 ? ' from now' : ' ago';
    d = Math.abs(d);
    if (d < 60) return 'just now' + suffix;
    // Minutes
    if (d < 120) return 'a minute' + suffix;
    if (d < 3600) return (d / 60 | 0) + ' minutes' + suffix;
    // Hours
    d = d / 3600 | 0;
    if (d < 2) return 'an hour' + suffix;
    if (d < 24) return d + ' hours' + suffix;
    // Days
    d = d / 24 | 0;
    if (d < 2) return 'a day' + suffix;
    if (d < 30) return d + ' days' + suffix;
    // Months
    if (d < 60) return 'a month' + suffix;
    if (d < 360) return (d / 30 | 0) + ' months' + suffix;
    // Years
    if (d < 365 * 2) return 'a year' + suffix;
    return (d / 365 | 0) + ' years' + suffix;
  }

});
