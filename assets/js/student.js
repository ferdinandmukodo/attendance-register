function createTable() {

    const students = [
      {
        rollNo: "0001",
        name: "Mary Mbugua",
        laptop: "HP",
        serialNo: "SVN67000",
        class: "MP26",
        section: "Acess Program"
      },
      {
        rollNo: "0002",
        name: "Isaac Sindiga",
        laptop: "HP",
        serialNo: "DN345906",
        class: "MP26",
        section: "Acess Program"
      },
      {
        rollNo: "0002",
        name: "Janet  Oloo",
        laptop: "Lenovo",
        serialNo: "SCV898906",
        class: "MP26",
        section: "Acess Program"
      }
      ];
      
      var table = document.getElementById("rows");
      
      for (let i = 0; i < students.length; i++) {
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML = students[i].rollNo;
        cell2.innerHTML = students[i].name;
        cell3.innerHTML = students[i].laptop;
        cell4.innerHTML = students[i].serialNo;
        cell5.innerHTML = students[i].class;
        cell6.innerHTML =students[i].section;
      }
    }
    createTable()
      function hideDetails(){
      document.getElementById("createstudents").style.display="none";
        
    }
    hideDetails()
       function displayForm(){
         document.getElementById("createstudents").style.display="block";
  
      }
      
  
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