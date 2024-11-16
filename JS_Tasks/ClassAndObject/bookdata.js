class Book{
    constructor(title,author,publisher,year,genre){
        this.title = title
        this.author = author
        this.publisher = publisher
        this.year = year
        this.genre = genre
    }
    describe(){
        console.log(`${this.title}-${this.author}(${this.year})`)
    }
    displayGenre(){
        console.log(`${this.genre}`)
    }
}

const classicBook = new Book('The Great Gatsby','F.Scott',"Charles Scribner's Sons",1925,'Tragedy')
const sciFiBook = new Book('The Martian','Andy Weir','Ballantine Books',2011,'Sci-Fi')
console.log(classicBook)
console.log(sciFiBook)
classicBook.describe()
sciFiBook.displayGenre()