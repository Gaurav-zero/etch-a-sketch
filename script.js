const outerDiv= document.querySelector(".container");
const inp= document.querySelector("#gridSize");

function makeGrid(gridSize= 16){
    while(outerDiv.firstChild){
        outerDiv.removeChild(outerDiv.firstChild);
    }

    outerDiv.style.setProperty("--size", gridSize);
    for(let i=0; i< gridSize*gridSize; ++i){
        let newDiv= document.createElement("div");
        newDiv.classList.add("childDiv");
        outerDiv.appendChild(newDiv);
    }

    let cells= document.querySelectorAll(".childDiv");
    cells.forEach((cell) =>{
        cell.addEventListener(("mouseover") , (event)=>{
            event.target.style.backgroundColor= "black";
        });
    });
}

function randomRGB(){
    let f= Math.floor;
    let r= Math.random;
    
}

makeGrid();

inp.addEventListener(("input"), (e)=>{
    makeGrid(e.target.value);
});