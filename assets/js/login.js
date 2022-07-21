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