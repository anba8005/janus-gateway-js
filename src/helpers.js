var Helpers = {

  /**
   * @param {Object} destination
   * @param {...Object|null} source
   * @returns {Object}
   */
  extend: function(destination, source) {
    if (source) {
      var sources = Array.prototype.slice.call(arguments, 1) || [];

      sources.forEach(function(source) {
        Object.keys(source).forEach(function(key) {
          destination[key] = source[key];
        });
      });
    }

    return destination;
  },
  /**
   * @param {Function} ctor
   * @param {Function} superCtor
   */
  inherits: function(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  },
  /**
   * @param {Array} list
   * @param {Function} predicate
   */
  promiseMap: function(list, predicate) {
    var promises = [];
    for (var i = 0; i < list.length; i++) {
      promises.push(predicate(list[i]));
    }
    return Promise.all(promises);
  }
};

module.exports = Helpers;
