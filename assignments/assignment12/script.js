"using strict"

async function displayMovies(){
    let response = await fetch("https://portiaportia.github.io/csce242/json/movies.json");
    let movieJSON = await response.json();
    let contentDiv = document.getElementById("content");


    for(i in movieJSON){
        let movie = movieJSON[i];
        contentDiv.append(getMovieData(movie));
        //contentDiv.append(movieBulletList());
    }
}

function getMovieData(movie){



    let movieSection = document.createElement("div");
    movieSection.className = "movie";
    let movieTitle = document.createElement("h4");

    let movieImg = document.createElement("div");
    movieImg.className ="movieImg";
    movieImgSrc = document.createElement("img");
    movieImgSrc.src = "https://portiaportia.github.io/csce242/json/"+movie.img;
    movieImg.append(movieImgSrc);
    movieSection.append(movieImg);

    let movieInfo = document.createElement("div");
    movieInfo.className ="movieInfo";
    movieTitle.innerHTML = movie.title;
    movieInfo.append(movieTitle);
    movieInfo.append(movieBulletList(movie.director,movie.actors,movie.year,movie.genres));
    movieInfo.append(createShoePara(movie.description));
    movieSection.append(movieInfo);

    return movieSection;
    
}

function movieBulletList(director, actors, year, genres){
    let ulElem = document.createElement("ul");
    let liElemDir = document.createElement("li");
    let liElemAct = document.createElement("li");
    let liElemYr = document.createElement("li");
    let liElemGnr = document.createElement("li");


    for(i in director){
        liElemDir.innerHTML = director;
        ulElem.append(liElemDir);
    }

    for(i in actors){
        liElemAct.innerHTML = actors+" ";
        ulElem.append(liElemAct);
    }

    for(i in year){
        liElemYr.innerHTML = year;
        ulElem.append(liElemYr);
    }

    for(i in genres){
        liElemGnr.innerHTML = genres;
        ulElem.append(liElemGnr);
    }
    return ulElem;
}

function createShoePara(description){
    let movieDescrition = document.createElement("p");
    movieDescrition.innerHTML = description;
    return movieDescrition;
}

window.onload = function(){
    this.displayMovies();
}