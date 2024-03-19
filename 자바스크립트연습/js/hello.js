alert("안녕하세요");
//***3번째 객체를 만드는 방법(함수를 이용하여 객체 생성)
var calculator = (function () {
    function add(x, y) {
      return x + y;
    }
    function sub(x, y) {
      return x - y;
    }
    function mul(x, y) {
        return x * y;
      }
    return {
      add : add,
      sub : sub,
      mul : mul
    };
  })();

  var objArea = (function () {
    function getCircle(radius) {
      return radius*radius*Math.PI;
    }
    function getRectangle(x, y) {
      return x * y;
    }
    function getTriangle(x, y) {
        return x * y/2.0;
      }
    return {
      getCircle : getCircle,
      getRectangle : getRectangle,
      getTriangle : getTriangle
    };
  })();  
  // var objArea = (function(){})();  

