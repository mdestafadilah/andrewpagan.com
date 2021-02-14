import { error } from "./Button.module.scss";

const Button = ({ label }) => {
	return (
		<button
			type="button"
			// Note how the "error" class is accessed as a property on the imported
			// `styles` object.
			className={error}
		>
			{label}
		</button>
	);
};

export default Button;
