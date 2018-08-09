var katzDeli = [];
function takeANumber(katzDeliLine, newName){
  katzDeli.concat(katzDeliLine);
  katzDeli.push(newName);
  return "Welcome, " + newName + ". You are number " + (katzDeliLine.length) + " in line.";
}

function nowServing(){
  var first = katzDeliLine.shift();
  return first;
}