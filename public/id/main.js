var names, adj, reason;

window.onload = function() {
  adj = document.getElementById("adj");
  names = document.getElementById("names");
  reason = document.getElementById("reason");

  repeatNames();
};

// Loop through the different letterings
function getNameAtCounter() {
  var counterclone = counter;
  var toandfrom = ["Alex", "Hugo", "Zach", "Caley", "Peter"];
  var whereBool;
  var lpos = 0;

  for(x in toandfrom){
    counterclone -= toandfrom[x].length * 3;
    if(counterclone < 0){
      whereBool = false;
      break;
    }
    counterclone -= 5;
    if(counterclone < 0){
      whereBool = true;
      break;
    }
    lpos ++;
  }

  if(counterclone >= 0){
    counter = 0;
    return "";
  }

  console.log(counterclone);
  if(whereBool){
    return "";
  }
  else {
    console.log(counterclone);
    if(toandfrom[lpos].length * 2 < -counterclone){
      return toandfrom[lpos].substring(0, toandfrom[lpos].length * 3 + counterclone);
    }
    else if(toandfrom[lpos].length > -counterclone){
      return toandfrom[lpos].substring(0, -counterclone);
    }
    else{
      return toandfrom[lpos];
    }
  }

  counter++;

}
var counter = 0;

function repeatNames(){
  setTimeout(function(){
    names.innerHTML = getNameAtCounter();
    counter++;
    repeatNames();
  }, 100);

}
