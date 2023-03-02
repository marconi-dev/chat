class Username {

    makeInputs = (form) => {
        const textInput = document.createElement('input')
        textInput.placeholder = 'Username...'
        textInput.type = 'text'
        textInput.required = true
        textInput.name = 'username'
        textInput.autocomplete = 'off'
        textInput.id = "username-input"

        const submit = document.createElement('input')
        submit.id = "username-submit"
        submit.type = 'submit'
        submit.value = 'Ir para o Chat'

        form.appendChild(textInput)
        form.appendChild(submit)
    }

    makeForm = () => {
        const form = document.createElement('form')
        form.id = "username-form"
        form.onsubmit = ((e) => this.handleSubmit(e))
        form.on

        const container = document.querySelector('#username-container')
        container.appendChild(form)

        return form
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const username = e.target.username.value
        
        if (username === '') return

        localStorage.setItem('username', username)
        redraw()
        app.main()
    }

    addHint() {
        const hint_p = document.createElement('p')
        hint_p.id = 'username-hint-paragraph'
        hint_p.innerText = (
            'Clique em seu nome de usuário para alterá-lo a qualquer momento...'
        )
        
        const container = document.querySelector('#username-container')
        container.appendChild(hint_p)
    }

    createContainer() {
        const container = document.createElement('div')
        container.id = 'username-container'
        root.appendChild(container)
    }

    render() {
        redraw()
        this.createContainer()
        this.addHint()
        const form = this.makeForm()
        this.makeInputs(form)
    }
}