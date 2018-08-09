var katzDeli = [];
function takeANumber(katzDeliLine, newName){
  return "Welcome," + newName + ". You are number" + (katzDeliLine.length +1) + "in line.";
}

function nowServing(){
  var first = katzDeliLine.shift();
  return first;
}