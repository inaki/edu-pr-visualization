window.onload = function(){

  var paper = new Raphael(document.getElementById('stage'), 720, 300);

  var circ1 = paper.circle(100,100,30);
  var circ2 = paper.circle(165,100,30);
  var circ3 = paper.circle(590,100,30);

  circ2.animate({cx: 520}, 1000);

  var hometown = function(){
    circ2.animate({cx: 165}, 1000);
  }

};
