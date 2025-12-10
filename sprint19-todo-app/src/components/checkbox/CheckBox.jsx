import "./CheckBox.css";

const CheckBox = ({ checked, onChange }) => {
    return (
        <div className="round">
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <label className={`checkbox ${checked ? "checkbox--active" : ""}`} />
        </div>
    );
};

export default CheckBox;