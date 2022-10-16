var tasklist= document.getElementById("tasklist");

function addtask(){
    var task = document.getElementById("task");
    var li = document.createElement("li")
    var newtask = document.createTextNode(task.value)
    li.appendChild(newtask)
    task.value=""
    

    var delbtn = document.createElement("button")
    var del = document.createTextNode("Delete")
    delbtn.appendChild(del)
    delbtn.setAttribute("onclick","deltask(this)")
    delbtn.setAttribute("class","btn")
    li.appendChild(delbtn)
    
    var editbtn = document.createElement("button")
    var edit = document.createTextNode("Edit")
    editbtn.appendChild(edit)
    editbtn.setAttribute("onclick","edittask(this)")
    editbtn.setAttribute("class","btn")
    li.appendChild(editbtn)

    tasklist.appendChild(li)
    
}

function deltask(a){
    a.parentNode.remove()
}

function edittask(a){
    var newtask= prompt("Edit Task",a.parentNode.firstChild.nodeValue);
    a.parentNode.firstChild.nodeValue = newtask
}

function Deleteall(){
    tasklist.innerHTML=""
}