/*function search(){
    let input=document.getElementById("searchbar").value;
    input=input.toLowerCase();
    let x=document.getElementsByClassName("student");
    for (i=0;i<x.length;i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display="none!"

        }
        else{
            x[i].style.display="list-item";  
        }
    }

}
*/
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
