export const SearchList = [ 
    "Batman Begins",
    "The Dark Knight",
    "The Dark Knight Rises",
    "Superman: Man of Steel",
    "Batman v Superman: Dawn of Justice",
    "Wonder Woman",
    "Justice League",
    "Aquaman",
    "Shazam",
    "Birds of Prey",
    "Wonder Woman ",
    "The Suicide Squad",
    "Zack Snyder's Justice League",
    "The Flash",
    "Black Adam",
    "Superman II",
    "Superman Returns",
    "The Lego Batman Movie",
    "Teen Titans Go! To the Movies",
    "Green Lantern"
]

const resultBox = document.querySelector(
    ".results"
);

const inputBox = document.querySelector(
    ".search-bar"
);

const displayResults = function (result){
    const resultHTML = result.map(function (busqueda){
        return `<li onclick=selectInput(this)> ${busqueda} </li> `;});

    resultBox.innerHTML ='<ul>' + resultHTML.join("") +'</ul>';}

inputBox.onkeyup = function(e){
    let result = [];

    const input = inputBox.value.toLowerCase();

    if (input.length === 0){
        resultBox.innerHTML="";
    }

    if(input.length){
        result =SearchList.filter((busqueda)=> {
            return busqueda.toLowerCase().includes(input);
        });
        displayResults(result);
    }
};

function selectInput(busqueda){
    inputBox.value = busqueda.innerText;
    resultBox.innerHTML="";
}