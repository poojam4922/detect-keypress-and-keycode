let keyName =  document.querySelector('.keyName');
let keyCodevalue =  document.querySelector('.keyCode');

document.addEventListener("keydown", (event) =>{
    console.log(event);
    keyName.innerText = event.key;
    keyCodevalue.innerText = event.keyCode;
    if(event.key == " "){
        keyName.innerText = "space"
     }
})