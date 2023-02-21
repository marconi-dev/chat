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
        root.appendChild(form)

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

    render() {
        redraw()
        const form = this.makeForm()
        this.makeInputs(form)
    }
}