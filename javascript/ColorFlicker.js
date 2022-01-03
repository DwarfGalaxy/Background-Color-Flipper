 // For Simple color
 var color = ["red", "green", "yellow", "pink", "blue", "orange"];
 document.getElementById("submit").onclick = () => {
   var random = Math.floor(Math.random() * color.length);
   document.body.style.backgroundColor = color[random];
   var colorName = document.getElementById("colorName");
   colorName.innerHTML = color[random];
   submit.style.backgroundColor = color[random];
   submit.style.color = "white";
 };
 //   For Hex color
 var HexGenerator = [
   0,
   1,
   2,
   3,
   4,
   5,
   6,
   7,
   8,
   9,
   "A",
   "B",
   "C",
   "D",
   "E",
   "F",
 ];
 document.getElementById("submitHex").onclick = () => {
   var HexColor = "#";
   for (var i = 0; i < 6; i++) {
     HexColor = HexColor + HexGenerator[getRandomNumber()];
   }
   document.body.style.backgroundColor = HexColor;
   var HexColorName = document.getElementById("hexColor");
   submitHex.style.backgroundColor = HexColor;
   HexColorName.innerHTML = HexColor;
 };
 function getRandomNumber() {
   return Math.floor(Math.random() * HexGenerator.length);
 }