/**
 * @class [description]
 * @author majunbao <https://majunbao@github.com>
 */

// 选择 body
// ID 选择器
// Class 选择器
// Element 选择器

if (typeof Object.create != 'function') {
  Object.create = (function() {
    var Temp = function() {};
    return function (prototype) {
      if (arguments.length > 1) {
        throw Error('Second argument not supported');
      }
      if(prototype !== Object(prototype)) {
        throw TypeError('Argument must be an object');
      }
      if (prototype === null) { 
        throw Error('null [[Prototype]] not supported');
      }
      Temp.prototype = prototype;
      var result = new Temp();
      Temp.prototype = null;
      return result;
    };
  })();
}

function $$(){

}
$$.prototype = {
  splice : [].splice,
  push : [].push,
  sort : [].sort
}
$$.prototype.aa = "aa";

// 返回 dom 对象
function _getDOMObject(){

}

// 返回 jquery 对象
function _instance(){
  dom = Object.create($$.prototype);
  dom.length = 1;
  dom.content = "aa";
  dom[0] = document.body;
  return dom;
}

var bb = Object.create($$)

