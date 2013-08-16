
// The module candybar wrapper.
(function (name, mod) {
  if (typeof exports == 'object' && typeof module == 'object') return mod(exports); // CommonJS
  if (typeof define == 'function' && define.amd) return define(['exports'], mod); // AMD
  mod(this[name] || (this[name] = {})); // Plain browser env
})('snippets', function (exports) {

  // Redable English relative dates.
  var timeDelta = exports.timeDelta = function timeDelta (d) {
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
  };

  // Get a JS Object of the query parameters in a url.
  var queryParams = exports.queryParams = function queryParams (url) {
    // Isolate the querystring.
    if (url.indexOf('?') >= 0) {
      url = url.split('?')[1];
    }
    var obj = {};
    var pairs = url.split('&');

    pairs.forEach(function(p) {
      p = p.split('=');
      obj[p[0]] = typeof p[1] === 'undefined' ? true: p[1];
    });

    return obj;
  }

  // Slice any array-like object.
  var slice = exports.slice = function slice (a, offset) {
    return Array.prototype.slice.call(a, offset);
  };

  // Partial Application of functions.
  var partial = exports.partial = function partial (fn) {
    var args = slice(arguments, 1);
    return function() {
        return fn.apply(this, Array.prototype.concat.apply(args, arguments));
    };
  };

});
