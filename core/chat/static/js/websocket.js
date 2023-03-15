class Connection {
    constructor() {
        this.unique_id = this.set_id()
        this.websocket = this.startConnection()
        setTimeout(() => {this.send('Entrou no chat...')}, 1000)
    }

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
      
    set_id() { 
        const firstNum = this.getRandomIntInclusive(1, 5000000)    
        const secondNum = this.getRandomIntInclusive(5000000, 999999)
        const username = localStorage.getItem('username')
        
        const id = `${firstNum}${username}${secondNum}`
        localStorage.setItem('id', id)
        return localStorage.getItem('id')
    }

    startConnection() {
        const ws = new WebSocket(url)
        ws.onmessage = (e) => this.receiveMessages(e)
        return ws
    }

    receiveMessages = (e) => {
        const data = JSON.parse(e.data)
    
        const msgBody = {
            'msg':data.msg,
            'user':data.user,
            'unique_id':data.unique_id
        } 

        Chat.appendMsg(msgBody)
        this.addChangeUsername()
    }

    addChangeUsername = () => {
        // Adiciona um evento para alterar o nome de usuário

        const usernames = document.querySelectorAll('h5.msg-username') 
        usernames.forEach(name => this.changeUsername(name))
    }

    changeUsername = (name) => {
        name.addEventListener('click', (e) => {
            this.websocket.close()
            new Username()
        })
    }

    send = (msg) => {
        const username = localStorage.getItem('username')
        const data = JSON.stringify({
            'msg':msg,
            'user':username,
            'unique_id':this.unique_id
        })
        this.websocket.send(data)
    }

    exit = () => {
        
    }
}