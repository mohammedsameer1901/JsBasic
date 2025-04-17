var globalVar = "I'm global";

function scopeTesttt() {
  var functionVarr= "I'm local  function";
  if (true) {
    let blockedVarr = "I'm block";
    console.log(blockedVar);
  }
  console.log(globalVar);
  console.log(functionVarr);
}

scopeTesttt();
