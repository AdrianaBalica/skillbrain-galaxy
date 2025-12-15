import "./Input.css";

const Input = (props) => {
    const { className, ...rest } = props;
    return <input className={`primary-input ${className || ""}`} {...rest} />;
};

export default Input;