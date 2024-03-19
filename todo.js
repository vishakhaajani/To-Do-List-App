var inputBox = document.getElementById('input-box');
var list = document.getElementById('list');

function addTask(){
    if(inputBox.value == ""){
        alert('You must write...');
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inputBox.value = "";
    }
    saveData();
}

list.addEventListener("click", function(a){
    if(a.target.tagName == "LI"){
        a.target.classList.toggle("checked");
        saveData();
    }
    else if(a.target.tagName == "SPAN"){
        a.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}

function showTask(){
    list.innerHTML = localStorage.getItem("data");
}
showTask();