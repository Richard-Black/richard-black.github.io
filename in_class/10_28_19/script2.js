"using strict"

async function displayShoe(){ //async allows us to do multiple things at the same time
    //console.log("3");
    let respone = await fetch("https://richard-black.github.io/in_class/10_28_19/shoe.json"); //await = wait before this happens before proceeding
    //console.log(respone);
    //console.log("4");
    //console.log(respone);
    //console.log("5");
    let shoeJSON = await respone.json();
    let shoeName = shoeJSON.name;
    let shoeBrand = shoeJSON.brand;
    let comments = shoeJSON.comments;
    
    console.log(`${shoeName} by ${shoeBrand}`);
    for (i in comments){
        console.log(comments[i]);
    }
    
    //append a section with info about the shoe to your page
    let section = document.createElement("section");
    section.innerHTML =`${shoeName} by ${shoeBrand}`;
    let content = document.getElementById("content");
    content.append(section);
}

window.onload = function(){
    //console.log("1");
    this.displayShoe();

    //append a h1 to your page
    let content = document.getElementById("content");
    let h1 = document.createElement("h1");
    h1.innerHTML = 'I love shoes';
    content.append(h1);
    //console.log("2");
}