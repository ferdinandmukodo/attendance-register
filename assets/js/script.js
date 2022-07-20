

function createTable() {

  const students = [
    {
      rollNo: "0001",
      name: "Mary Mbugua",
      laptop: "HP",
      serialNo: "yh89706",
      class: "MP26",
      section: "Acess Program"
    },
    {
      rollNo: "0002",
      name: "Isaac Sindiga",
      laptop: "HP",
      serialNo: "scv898906",
      class: "MP26",
      section: "Acess Program"
    },
<<<<<<< HEAD
    {
      rollNo: "0003",
      name: "Anne Wambui",
      laptop: "HP",
      serialNo: "scv897706",
      class: "MP26",
      section: "Acess Program"
    }]

  var table = document.getElementById("rows");
  for (let i = 0; i < students.length; i++) {
    var row = table.insertRow(i);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(4);
    cell1.innerHTML = students[i].rollNo;
    cell2.innerHTML = students[i].name;
    cell3.innerHTML = students[i].laptop;
    cell4.innerHTML = students[i].serialNo;
    cell5.innerHTML = students[i].class;
    cell6.innerHTML = students[i].section;
  }
}

createTable()
function hideDetails() {
  document.getElementById("createstudents").style.display = "none";
}
hideDetails()
function displayForm() {
  document.getElementById("createstudents").style.display = "block";
  // document.getElementById("btn").addEventListener("click", displayForm);
}


function myCreateFunction() {
  var table = document.getElementById("rows");
  var row = table.insertRow(table.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  sname = document.getElementById("sname");
  sno = document.getElementById("sno");
  model = document.getElementById("model");
  serialno = document.getElementById("serialno");
  classname = document.getElementById("class");
  section = document.getElementById("section");


  cell1.innerHTML = sname;
  cell2.innerHTML = sno;
  cell3.innerHTML = model;
  cell4.innerHTML = serialno;
  cell5.innerHTML = classname;
  cell6.innerHTML = section;
  document.getElementById("btnsubmit").addEventListener("click", myCreateFunction);
}
     // myCreateFunction
=======
    ];
    
    var table = document.getElementById("rows");
    table.innerHTML = "";
    for (let i = 0; i < students.length; i++) {
      var row = table.insertRow(i);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      cell1.innerHTML = students[i].rollNo;
      cell2.innerHTML = students[i].name;
      cell3.innerHTML = students[i].serialNo;
      cell4.innerHTML = students[i].class;
      cell5.innerHTML =students[i].section;
    }
   
    document.getElementById("createstudents").style.display="none";
     function displayForm(){
       document.getElementById("createstudents").style.display="block";

    }
    document.getElementById("btn").addEventListener("click", displayForm);

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
>>>>>>> 778cd33b6515830c8ce92d58429f2666131620ea
