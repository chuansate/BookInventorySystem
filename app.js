let books_frm_database = [
    {
        title: "Intro to C++",
        author: "James",
        price: 100
    },
    {
        title: "Advanced Python",
        author: "Ben",
        price: 250
    },
    {
        title: "Calculus",
        author: "Newton",
        price: 125
    }
]


const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            books: books_frm_database
        }
    },

    methods: {
        increasePriceBy1() {
            for (bk of this.books) {
                bk.price = bk.price + 1
            }
        },

        decreasePriceBy1() {
            for (bk of this.books) {
                bk.price = bk.price - 1
            }
        },

        editBookInfo() {

        },

        deleteBook(title){
            var index_to_delete = -1 // get index if value found otherwise -1
            var index = 0
            for (bk of this.books) {
                if (bk.title == title) {
                    index_to_delete = index
                }
                index++;
            }
            if (index_to_delete > -1) { //if found
                this.books.splice(index_to_delete, 1);
            } else {
                console.log("The book '" + title + "' not found!")
            }
        },

        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },

        mouseoverEdit(event) {
            console.log("mouse over edit!")
        },

        mouseleaveEdit(event) {
            console.log("mouse leave edit!")
        }


    }
})

app.mount("#firstPart")