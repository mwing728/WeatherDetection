var modal = document.getElementById("myModal");

var openBtn = document.getElementById("mybutton");

var closeBtn = document.getElementsByClassName("close")[0];

var submitBtn = document.getElementById('registerbtn');

function submitForm(){
    document.getElementById('myForm').submit();
}


openBtn.onclick = function(){
    modal.style.display = 'block';
}
closeBtn.onclick = function(){
    modal.style.display = "none";
}
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}

