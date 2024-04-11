import "./styles.css"

const FormInput = (props:any) => {
    return(
        <>
            <div className="form">
                <label>
                    {props.label}
                </label>
                <input value={props.value} onChange={props.onChange}>
                </input>
            </div>
        </>
    )
}
export default FormInput;