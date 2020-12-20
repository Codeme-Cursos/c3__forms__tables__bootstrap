const FormInput = ({ id, label, value, handleChange, name, type = "text" }) => {
    return (
        <div className="form-group mt-3">
            <label
                htmlFor={id}
                className="text-muted"
            >
                {label}
            </label>
            {
                type === "textArea" &&
                <textarea
                    value={value}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    name={name}
                    id={id}
                />
            }
            {
                type !== "textArea" &&
                <input
                    value={value}
                    onChange={handleChange}
                    type={type}
                    className="form-control"
                    name={name}
                    id={id}
                />
            }


        </div>
    )
}

export default FormInput
