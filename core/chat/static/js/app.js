class App {
    constructor() {this.main()}
    
    main = () => {
        localStorage.getItem('username') !== null 
        ? new Chat() : new Username()
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