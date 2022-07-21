// function search(){
//     let input=document.getElementById("searchbar").value;
//     input=input.toLowerCase();
//     let x=document.getElementsByClassName("student");
//     for (i=0;i<x.length;i++){
//         if(!x[i].innerHTML.toLowerCase().includes(input)){
//             x[i].style.display="none!"

//         }
//         else{
//             x[i].style.display="list-item";  
//         }
//     }

// }

function search()
    {

const searchInput = document.getElementById("searchbar");
const namesFromDOM = document.getElementsByClassName("student");
searchInput.addEventListener("keyup", (event) => {
    const { value } = event.target;
    
    const searchQuery = value.toLowerCase();
    
    for (const nameElement of namesFromDOM) {
        let name = nameElement.textContent.toLowerCase();
        if (name.includes(searchQuery)) {
            nameElement.style.display = "block";
        } else {
            nameElement.style.display = "none";
            
        }
    }
});
}


//search bar
function search()
{
    var input, filter, table, tr, td, i;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++)
    {
    td = tr[i].getElementsByTagName("td")[0];
    if (td)
    {
    if (td.innerHTML.toUpperCase().indexOf(filter) > -1)
    {
    tr[i].style.display = "";
    }
    else
    {
    tr[i].style.display = "none";
    }
    }
}
}

//validate form
function formValidation()
{
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var uadd = document.registration.address;
var ucountry = document.registration.country;
var uzip = document.registration.zip;
var uemail = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex; if(userid_validation(uid,5,12))
{
if(passid_validation(passid,7,12))
{
if(allLetter(uname))
{
if(alphanumeric(uadd))
{ 
if(countryselect(ucountry))
{
if(allnumeric(uzip))
{
if(ValidateEmail(uemail))
{
if(validsex(umsex,ufsex))
{
}
} 
}
} 
}
}
}
}
return false;
}

function userid_validation(uid,mx,my)
{
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
uid.focus();
return false;
}
return true;
}

