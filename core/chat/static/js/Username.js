class Username {
    constructor() {this.render()}

    makeInputs = (form) => {
        const textValues = {
            HTMLtype     : 'input',
            
            placeholder  : 'Username...',
            type         : 'text',
            required     : true, 
            name         : 'username',
            autocomplete : 'off',
            id           : 'username-input'
        }
        const submitValues = {
            HTMLtype : 'input',
            
            id       : 'username-submit',
            type     : 'submit',
            value    : 'Ir para o Chat'
        }
        
        const inputs = [textValues, submitValues]
        inputs.map(el => form.appendChild(makeHTMLElement(el)))
    }

    makeForm = () => {
        const form = makeHTMLElement({
            HTMLtype : 'form',

            id       : 'username-form',
            onsubmit : (e) => this.handleSubmit(e)
        })

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
        const values = {
            HTMLtype  : 'p',

            id        : 'username-hint-paragraph',
            innerText : (
                'Clique em seu nome de usuário para alterá-lo \
                a qualquer momento...'
            )
        }
        const hint = makeHTMLElement(values)
        const container = document.querySelector('#username-container')
        container.appendChild(hint)
    }

    createContainer() {
        const values = {
            HTMLtype : 'div',
            
            id       : 'username-container'
        }
        const container = makeHTMLElement(values) 
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