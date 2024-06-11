const inputBox = document.getElementById("input-box");
const lsitContainer = document.getElementById("lsit-container");

let AddTask =()=>{
    if (inputBox.value === '') {
        alert("you must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        lsitContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
}