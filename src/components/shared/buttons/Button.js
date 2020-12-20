const Button = ({ type = 'button', color, text, onClick }) => {
    return (
        <button
            type={type}
            className={`btn btn-${color} btn-block mt-3`}
            onClick={type === 'submit' ? () => console.log('Pressing...') : onClick}
        >
            {text}
        </button>
    )
}

export default Button
