var messages = document.getElementById("Messages");
var textbox = document.getElementById("textbox");
var button= document.getElementById("button");
button.addEventListener("click",function(){
    var x = textbox.value;
    if(x == ""){
     alert("Write Something ");
    }
    else{    
        var Newmessage = document.createElement("li");
    Newmessage.innerHTML = textbox.value;
    messages.appendChild(Newmessage);
    textbox.value = "";
    }
})