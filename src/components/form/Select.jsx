const Select = (props) => {
    return(
        <div className="mb-3">
            <label className="form-label" htmlFor={props.name}>{props.title}</label>
            <select 
                className="form-select" 
                name={props.name}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
            >
                <option value="">{props.placeHolder}</option>
                {props.options.map((option) => {
                    return (
                        <option 
                        key={option.id}
                        value={option.id}>
                            {option.value}
                        </option>
                    )
                })}
            </select>
            <div className={props.errorDiv}>{props.errorMsg}</div>
        </div>
    );
}

export default Select;