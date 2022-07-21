
function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }

   
    document.getElementById("createstudents").style.display="none";
     function displayForm(){
       document.getElementById("createstudents").style.display="block";



    function myCreateFunction() {
        var table = document.getElementById("rows");
        var row = table.insertRow(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell2 = row.insertCell(3);
        var cell2 = row.insertCell(4);
        cell1.innerHTML = "NEW CELL1";
        cell2.innerHTML = "NEW CELL2";
      }

const btn=document.getElementById("log_In")
btn.addEventListener("click",(event)=>{
    event.preventDefault()
let inputA=document.getElementById("Admin_email").value
let inputB=document.getElementById("Password").value})


 function hashPassword(){
    let salt=bcrypt.genSaltSync(10);
    let hash=bcrypt.hashSync(password,salt)
    return hash;

 }
