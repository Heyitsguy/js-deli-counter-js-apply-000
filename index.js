var katzDeli = [];
function takeANumber(katzDeliLine, newName){
  if(typeof newName === 'string'){
    katzDeliLine.push(newName);
  }else if(typeof newName === "object"){
    katzDeliLine.concat(newName);
  }
  return "Welcome, " + newName + ". You are number " + (katzDeliLine.length) + " in line.";
}

function nowServing(katzDeliLine){
  var first = katzDeliLine.shift();
  return arr.shift() === "undefined" ? "There is nobody waiting to be served" : first;
}