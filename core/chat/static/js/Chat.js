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
        const username = makeHTMLElement({
            HTMLtype  : 'h5',
            className : 'msg-username',
            innerText : user 
        })
        const body = makeHTMLElement({
            HTMLtype  : 'p',
            className : 'msg-body',
            innerText : msg
        })
        
        return [username, body]
    }

    static handleMsgOwner(unique_id, container) {
        const storageId = localStorage.getItem('id')
        unique_id == storageId && container.classList.add('user-message')
    }

    static appendMsg = ({user, msg, unique_id}) => {
        const items = Chat.createMsgContainerItems(user, msg)
        
        const container = makeHTMLElement({
            HTMLtype  : 'div',
            className : 'msg-item'
        })
        
        Chat.handleMsgOwner(unique_id, container)
        items.forEach((item) => container.appendChild(item))

        const messages = document.querySelector('#messages-container')
        messages.appendChild(container)
        messages.scrollTop = messages.scrollHeight

    }
}