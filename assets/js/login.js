
function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
<<<<<<< HEAD
   
    document.getElementById("createstudents").style.display="none";
     function displayForm(){
       document.getElementById("createstudents").style.display="block";
>>>>>>> bc769546e64b6a6de0ad54ca42e7779bc1f7f993


<<<<<<< HEAD
// function myFunction() {
//     var checkBox = document.getElementById("myCheck");
//     var text = document.getElementById("text");
//     if (checkBox.checked == true) {
//         text.style.display = "block";
//     } else {
//         text.style.display = "none";
//     }
// }


// function myFunctiona() {
//     var check = document.getElementsByName("")
// }

// function myFunction() {
//     let =
// }
let inputB=document.getElementById("Password").value[]
=======
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
=======
>>>>>>> 51f14a1c10d273e2ec692b624dc36a4c55e1825f
const btn=document.getElementById("log_In")
btn.addEventListener("click",(event)=>{
    event.preventDefault()
let inputA=document.getElementById("Admin_email").value
let inputB=document.getElementById("Password").value})
<<<<<<< HEAD:assets/js/script.js
<<<<<<< HEAD
>>>>>>> 778cd33b6515830c8ce92d58429f2666131620ea
>>>>>>> bc769546e64b6a6de0ad54ca42e7779bc1f7f993
=======
>>>>>>> 51f14a1c10d273e2ec692b624dc36a4c55e1825f
=======


 function hashPassword(){
    let salt=bcrypt.genSaltSync(10);
    let hash=bcrypt.hashSync(password,salt)
    return hash;

 }
>>>>>>> a8d115221f991406157a7422b7c96e50889d9f25:assets/js/login.js
=======
}
>>>>>>> 1764f41e0c8db9a175d3bc391ebc99e88b5c4ad3
