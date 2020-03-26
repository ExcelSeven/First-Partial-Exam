var uName = document.getElementById("user");
var uCom = document.getElementById("userComment");

function addComment(){
  let sCom = document.querySelector('seccionComments');
  
  sCom.addEventListener('submit', (event) => {
    if(event.target.match('.del')){
      //Remove the target element matched
    }
  }
}

function addComment(){
  let sBut = document.querySelector('submit');
  
  if (uName != "" && uCom != "") {
    sBut.addEventListener('submit', (event) => {
      event.preventDefault();
      let sCom = document.querySelector("seccionComments");
      let nVal = uName.value;
      let nCom = uCom.value;
      sCom.innerHTML = '
        <h1> "nVal" </h1>
        <b> "nCom" </b>
        <button class="del"> Delete </button>
'
    })
  }
  uName.value = "";
  uCom.value = "";
}


function init(){
   addComment();
   remComment();
}


init();
