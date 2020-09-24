//Single Responsibility Principle ()

class News {
    constructor(title, text) {
        this.title = title
        this.text = text
        this.modified = false
    }
    update(text) {
        this.text = text
        this.modified = true
    }
    // This methods are incorrect in this class! They execute actions unbound with a current class.

    // toHTML() {
    //     return  `
    //             <div class="news">
    //             <h1>${this.title}</h1>
    //             <p>${this.text}</p>
    //             </div>
    //             `
    // }
    // toJSON() {
    //     return JSON.stringify({
    //            title: this.title,
    //            text: this.text,
    //            modified: this.modified
    //            }, null, 2)
    // }
}

class NewsPrinter {
    constructor(news) {
        this.news = news
    }
    toHTML() {
        return `
                <div class="news">
                <h1>${this.news.title}</h1>
                <p>${this.news.text}</p>
                </div>
                `
    }
    toJSON() {
        return  JSON.stringify({
                title: this.news.title,
                text: this.news.text,
                modified: this.news.modified
                }, null, 2)
    }
    toXML() {
        return  `
                <news>
                <title>${this.news.title}</title>
                <text>${this.news.text}</text>
                </news>
                `
    }
}

const newsOne = new News('Next steps!', 'Lorem ipsum dolor lorem ipsum 123...')
const print = new NewsPrinter(newsOne)

console.log(print.toHTML())
console.log(print.toJSON())
console.log(print.toXML())
