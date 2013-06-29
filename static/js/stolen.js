// Generated by CoffeeScript 1.6.1
(function() {
  var setHeights;

  setHeights = function() {
    var i, previews, _i, _j, _len, _ref, _results, _results1;
    previews = (function() {
      _results = [];
      for (var _i = 0, _ref = $('.preview').length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; 0 <= _ref ? _i++ : _i--){ _results.push(_i); }
      return _results;
    }).apply(this);
    _results1 = [];
    for (_j = 0, _len = previews.length; _j < _len; _j++) {
      i = previews[_j];
      _results1.push($('.preview')[i].style.height = $('.preview img')[i].height + 'px');
    }
    return _results1;
  };

  $(document).ready(function() {
    return setHeights();
  });

}).call(this);
