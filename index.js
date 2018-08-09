var katzDeli = [];
function takeANumber(katzDeliLine, newName){
  if(typeof newName === 'string'){
    katzDeliLine.push(newName);
  }else if(typeof newName === "object"){
    katzDeliLine...newName;
  }
  return "Welcome, " + newName + ". You are number " + (katzDeli.length) + " in line.";
}

function nowServing(){
  var first = katzDeliLine.shift();
  return first;
}