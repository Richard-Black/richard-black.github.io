"using strict"

async function displayAlbums(){
    let response = await fetch("https://richard-black.github.io/node/assignment13/albums.json");
    let albumJson = await response.json();
    let contentDiv = document.getElementById("content");


    for(i in albumJson){
        let album = albumJson[i];
        contentDiv.append(getalbumData(album));
    }
}

function getalbumData(album){



    let albumSection = document.createElement("div");
    albumSection.className = "album";
    let albumTitle = document.createElement("h4");

    let albumImg = document.createElement("div");
    albumImg.className ="albumImg";
    albumImgSrc = document.createElement("img");
    albumImgSrc.src = "https://richard-black.github.io/node/assignment13/"+album.img;
    albumImg.append(albumImgSrc);
    albumSection.append(albumImg);

    let albumInfo = document.createElement("div");
    albumInfo.className ="albumInfo";
    albumTitle.innerHTML = album.title;
    albumInfo.append(albumTitle);
    albumInfo.append(albumBulletList(album.artist,album.year,album.producers,album.label));
    albumInfo.append(createShoePara(album.description));
    albumSection.append(albumInfo);

    return albumSection;
    
}

function albumBulletList(artist, year, producers, label){
    let ulElem = document.createElement("ul");
    let liElemDir = document.createElement("li");
    let liElemAct = document.createElement("li");
    let liElemYr = document.createElement("li");
    let liElemGnr = document.createElement("li");


    for(i in artist){
        liElemArtist.innerHTML = artist;
        ulElem.append(liElemDir);
    }

    for(i in year){
        liElemYr.innerHTML = year;
        ulElem.append(liElemYr);
    }


    for(i in producers){
        liElemProd.innerHTML = producers+" ";
        ulElem.append(liElemAct);
    }

    for(i in label){
        liElemLabel.innerHTML = label;
        ulElem.append(liElemGnr);
    }
    return ulElem;
}

function createShoePara(description){
    let albumDescrition = document.createElement("p");
    albumDescrition.innerHTML = description;
    return albumDescrition;
}

window.onload = function(){
    this.displayAlbums();
}