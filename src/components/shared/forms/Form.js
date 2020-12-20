const Form = ({ onSubmit = () => console.log('Submiting...'), children, title = 'Formulario' }) => {

    const handleSubmit = e => {
        e.preventDefault()
        onSubmit()
    }

    return (
        <form onSubmit={handleSubmit}>
            <h5 className="m-0">{title}</h5>
            <hr/>
            {children} 
        </form>
    )
}

export default Form
