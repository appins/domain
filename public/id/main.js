var names, adj, reason;

window.onload = function() {
  adj = document.getElementById("adj");
  names = document.getElementById("names");
  reason = document.getElementById("reason");

  repeatNames();
};

// Loop through the different elements in the array in a certain way.
function getNameAtCounter() {
  var counterclone = counter;
  var toandfrom = ["Alex uses his", "Hugo uses his", "Zach uses his",
  "Noah uses his", "Peter uses his", "Chris uses his", "Mitchel uses his",
  "Sue uses her", "I use my"];
  var whereBool;
  var lpos = 0;

  for(x in toandfrom) {
    counterclone -= toandfrom[x].length * 3;
    if(counterclone < 0) {
      whereBool = false;
      break;
    }
    counterclone -= 1;
    if(counterclone < 0) {
      whereBool = true;
      break;
    }
    lpos ++;
  }

  if(counterclone >= 0) {
    counter = 0;
    return "";
  }

  nextTurnChange = false;

  console.log(counterclone);
  if(whereBool) {
    return "";
  }
  else {
    console.log(counterclone);
    if(toandfrom[lpos].length * 2 < -counterclone) {
      return toandfrom[lpos].substring(0, toandfrom[lpos].length * 3 + counterclone);
    }
    else if(toandfrom[lpos].length > -counterclone - 1) {
      return toandfrom[lpos].substring(0, -counterclone);
    }
    else{
      if(toandfrom[lpos].length > -counterclone - 2) {
        nextTurnChange = true;
      }
      return toandfrom[lpos];
    }
  }
}

function getDescAtCounter() {
  var counterclone = counterDesc;
  var toandfrom = ["share with classmates.", "keep in touch.",
  "contact teachers.", "talk with friends.", "to ask what the homework was."];
  var whereBool;
  var lpos = 0;

  for(x in toandfrom) {
    counterclone -= toandfrom[x].length * 3;
    if(counterclone < 0) {
      whereBool = false;
      break;
    }
    counterclone -= 1;
    if(counterclone < 0) {
      whereBool = true;
      break;
    }
    lpos ++;
  }

  if(counterclone >= 0) {
    counterDesc = 0;
    return "";
  }

  nextTurnChangeDesc = false;

  console.log(counterclone);
  if(whereBool) {
    return "";
  }
  else {
    console.log(counterclone);
    if(toandfrom[lpos].length * 2 < -counterclone) {
      return toandfrom[lpos].substring(0, toandfrom[lpos].length * 3 + counterclone);
    }
    else if(toandfrom[lpos].length > -counterclone - 1) {
      return toandfrom[lpos].substring(0, -counterclone);
    }
    else{
      if(toandfrom[lpos].length > -counterclone - 2) {
        nextTurnChangeDesc = true;
      }
      return toandfrom[lpos];
    }
  }
}

var nextTurnChange = false;
var counter = 0;
var nextTurnChangeDesc = false;
var counterDesc = 0;

function repeatNames() {
  setTimeout(function() {
    if(nextTurnChange && nextTurnChangeDesc) {
      names.innerHTML = getNameAtCounter();
      counter++;
      reason.innerHTML = getDescAtCounter();
      counterDesc++;
    }
    else if(nextTurnChange) {
      reason.innerHTML = getDescAtCounter();
      counterDesc++;
    }
    else if(nextTurnChangeDesc) {
      names.innerHTML = getNameAtCounter();
      counter++;
    }
    else {
      names.innerHTML = getNameAtCounter();
      counter++;
      reason.innerHTML = getDescAtCounter();
      counterDesc++;
    }
    repeatNames();

  }, 60);

}
