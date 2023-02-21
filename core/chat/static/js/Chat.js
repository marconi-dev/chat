class Chat {

    makeMessages() {
        const messages = document.createElement('div')
        messages.id = 'messages-container'
        
        root.appendChild(messages)
    }

    makeForm() {
        const form = document.createElement('form')
        form.id = 'chat-form'
        form.handleSubmit = () => this.handleSubmit()
        root.appendChild(form)

        return form
    }

    makeInputs(form) {
        const msg = document.createElement('input')
        msg.id = 'chat-input'
        msg.type = 'text'
        msg.name = 'msg'

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
    }
}