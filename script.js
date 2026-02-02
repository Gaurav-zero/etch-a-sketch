const outerDiv= document.querySelector(".container");
const inp= document.querySelector("#gridSize");

function randomRGB(){
    let f= Math.floor;
    let r= Math.random;
    return "rgb("+ f(r()*255)+ "," + f(r()*255) + "," + f(r()*255) +")";
}

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
            let randomColor= randomRGB();
            event.target.style.backgroundColor= randomColor;
        });
    });
}

makeGrid();

inp.addEventListener(("input"), (e)=>{
    makeGrid(e.target.value);
});