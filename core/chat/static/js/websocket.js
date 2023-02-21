class Connection {
    constructor() {
        this.websocket = this.startConnection()
    }

    startConnection() {
        const url = 'ws://192.168.1.64:8000/ws/chat/'
        const ws = new WebSocket(url)

        ws.onmessage = (e) => this.receiveMessages(e)
        return ws
    }

    receiveMessages(e) {
        const data = JSON.parse(e.data)

        if (data.status === 'connected') {
            this.send('Entrou no chat...')
            return
        }
        const msgBody = {
            'msg':data.msg,
            'user':data.user
        } 

        Chat.appendMsg(msgBody)
        console.log(data)
    }

    send = (msg) => {
        const username = localStorage.getItem('username')
        const data = JSON.stringify({
            'msg':msg,
            'user':username
        })
        this.websocket.send(data)
    }
}