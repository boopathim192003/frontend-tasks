function validateform(){
    var username=document.getElementById('username').value;
    var password=document.getElementById('passoword').value;


    if(username==" "||password==" "){
        alert('Please fill in all fields');
        return false;
    }
    return true;
}