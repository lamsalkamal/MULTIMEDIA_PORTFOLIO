function addUser(){
    var list = document.getElementById('users');
var username =document.getElementById('username').value;
var entry = document.createElement('ul');
entry.appendChild(document.createTextNode(username ));
list.appendChild(entry);
    return false;
}