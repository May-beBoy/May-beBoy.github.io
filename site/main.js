var natu = '<iframe src="https://editor.p5js.org/mayboy/full/puWGigjgS"></iframe>';
var egg = '<iframe src="https://editor.p5js.org/mayboy/full/DHz0cHi8f"></iframe>';
var marble = '<iframe src="https://editor.p5js.org/mayboy/full/uWSXwRlQF"></iframe>';
var play = ' <img src="images/play.svg" width=50px height="50">';

var btnNatu = document.getElementById("btn_natu");
var btnegg = document.getElementById("btn_egg");
var btnmarble = document.getElementById("btn_marble");

btnNatu.onclick = function () {
    var txt = document.getElementById("exNatuframe");
    txt.innerHTML = natu;
}
btnegg.onclick = function () {
    var txt = document.getElementById("exEggframe");
    txt.innerHTML = egg;
}
btnmarble.onclick = function () {
    var txt = document.getElementById("exmarbleframe");
    txt.innerHTML = marble;
}