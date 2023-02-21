class App {
    constructor() {
        this.main()
    }
    
    usernameExists = () => {
        const username = localStorage.getItem('username')
        return (username !== null)
    }
    
    main = () => {
        if (this.usernameExists()) {
            const chat = new Chat() 
            chat.render()
            return localStorage.getItem('username')
        } else {
            const username = new Username()
            username.render()
        }
    }
}

function redraw() {
    root.remove()
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.id = "root"
    root = document.querySelector('#root')
}

let root = document.querySelector('#root')
const app = new App()