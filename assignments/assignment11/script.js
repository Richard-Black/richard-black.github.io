"using strict"

class Books {
    constructor(title, author, genre, year){
        this._title = title;
        this._author = author;
        this._genre = genre;
        this._year = year;
    }

    getTitle(){
        return this._title;
    }

    getAuthor(){
        return this._author;
    }

    getGenre(){
        return this._genre;
    }

    getYear(){
        return this._year
    }
}

books = [];
books.push(new Books("The Great Gatsby","F. Scott Fitzgerald","Tragedy","1925"));
books.push(new Books("The Island of Doctor Moreau","H. G. Wells","Science fiction","1896"));
books.push(new Books("The Picture of Dorian Gray","Oscar Wilde","Philosophical fiction","1890"));
books.push(new Books("The Count of Monte Cristo","Alexandre Dumas","Historical novel, Adventure","1844–1846"));
books.push(new Books("The 48 Laws of Power","Robert Greene","Self-help","1998"));

for(let book of books){
    let imagesDiv = document.getElementById("bookImage");
    img = document.createElement("img");
    img.src = "images/"+book.getTitle()+".jpeg";
    book = book.getTitle().bold()+" by "+book.getAuthor()+", genre: "+book.getGenre()+", written in "+book.getYear();
    let contentDiv = document.getElementById("bookContent");
    let pElem = document.createElement("p");
    contentDiv.append(pElem);
    pElem.append(book);
    pElem.innerHTML = book;
    imagesDiv.append(img);
}



