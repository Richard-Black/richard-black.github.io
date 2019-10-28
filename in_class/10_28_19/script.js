"using strict"

async function special(){
    console.log("In Special Beginning");
    let result = await setTimeout(doStuff, 2000);
    console.log("In Special Ending");
}

function doStuff(){
    console.log("In do stuff"); 
}

window.onload = function(){
    this.console.log("Before calling Special");
    this.special();
    this.console.log("After calling Special");
}




