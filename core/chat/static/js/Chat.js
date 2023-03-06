class Chat {
    constructor() {
        this.chat = new Connection()
        this.render()
    }

    makeMessages() {
        const messages = makeHTMLElement({
            HTMLtype : 'div',
            id       : 'messages-container'
        })
        root.appendChild(messages)
        
        const spacer = makeHTMLElement({
            HTMLtype : 'div',
            id       : 'messages-spacer'
        })
        messages.appendChild(spacer)
    }

    makeForm() {
        const form =  makeHTMLElement({
            HTMLtype : 'form',
            id       : 'chat-form',
            onsubmit : (e) => this.handleSubmit(e)
        })
        
        root.appendChild(form)
        return form
    }

    makeInputs(form) {
        const msgValues = {
            HTMLtype     : 'input',
            id           : 'chat-input',
            type         : 'text',
            name         : 'msg',
            placeholder  : 'Escreva uma mensagem...',
            required     : true,
            autocomplete : 'off'
        }
        const submitValues = {
            HTMLtype : 'input',
            id       : 'chat-submit',
            value    : 'Enviar',
            type     : 'submit'
        }

        const inputs = [msgValues, submitValues]
        inputs.map(el => form.appendChild(makeHTMLElement(el)))
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

        document.querySelector('#chat-input').focus()
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