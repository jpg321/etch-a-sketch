let colour = "black";
const container = document.querySelector("#container");

for(let i=0; i< 16; i ++)
{
    let newColumn = document.createElement("div");
    newColumn.classList.add("column");
    document.querySelector("#container").appendChild(newColumn);
    for(let j=0; j<16; j++)
    {
        let newRow = document.createElement("div");
        newRow.classList.add("cell-row");
        newRow.addEventListener("mouseover", colourBackground);
        newColumn.appendChild(newRow);
    }
}

const blueButton = document.createElement("button"); 
blueButton.innerText = "Blue";
document.body.appendChild(blueButton);

const blackButton = document.createElement("button"); 
blackButton.innerText = "Black";
document.body.appendChild(blackButton);

const randomButton = document.createElement("button"); 
randomButton.innerText = "Random";
document.body.appendChild(randomButton);

const resetButton = document.createElement("button"); 
resetButton.innerText = "Reset";
document.body.appendChild(resetButton);



blueButton.addEventListener("click", ()=> {
    changeColour("blue");
})

blackButton.addEventListener("click", ()=> {
    changeColour("black");
})

resetButton.addEventListener("click", ()=> {
    clearBoard();
    changeColour("black");
});

randomButton.addEventListener("click", ()=> {
    changeColour("random");
});

function changeColour(choice) {
    colour = choice;
}

function colourBackground(){
    if ((colour === "random")){
    this.style.background = `hsl(${Math.random() * 360}, 100%,50%)`;
    } else {
        this.style.background = colour;
    }
}

function clearBoard(){
    let cell = container.querySelectorAll("div")
    cell.forEach((div) => (div.style.backgroundColor = "white"));
}



