class Chat {
    constructor() {
        this.chat = new Connection()
    }

    makeMessages() {
        const messages = document.createElement('div')
        messages.id = 'messages-container'
        root.appendChild(messages)
    }

    makeForm() {
        const form = document.createElement('form')
        form.id = 'chat-form'
        form.onsubmit = (e) => this.handleSubmit(e)
        root.appendChild(form)

        return form
    }

    makeInputs(form) {
        const msg = document.createElement('input')
        msg.id = 'chat-input'
        msg.type = 'text'
        msg.name = 'msg'
        msg.placeholder = "Escreva uma mensagem..."
        msg.required = true

        const submit = document.createElement('input')
        submit.id = 'chat-submit'
        submit.value = 'Enviar'
        submit.type = 'submit'


        form.appendChild(msg)
        form.appendChild(submit)
    }
    
    render() {
        this.makeMessages()
        const form = this.makeForm()
        this.makeInputs(form)
    }

    handleSubmit(e) {
        e.preventDefault()
        const msg = e.target.msg.value
        this.chat.send(msg)
        e.target.msg.value = ""
    }

    static createMsgContainerItems(user, msg) {
        const username = document.createElement('h5')
        username.className = 'msg-username'
        username.innerText = user

        const body = document.createElement('p')
        body.className = 'msg-body'
        body.innerText = msg

        return [username, body]
    }

    static appendMsg = ({user, msg, unique_id}) => {
        const items = Chat.createMsgContainerItems(user, msg)

        const container = document.createElement('div')
        container.className = 'msg-item'

        if (unique_id == localStorage.getItem('id')) {
            container.classList.add('user-message')
        }
        items.forEach((item) => container.appendChild(item))

        const messages = document.querySelector('#messages-container')
        messages.appendChild(container)
        messages.scrollTop = messages.scrollHeight

    }
}