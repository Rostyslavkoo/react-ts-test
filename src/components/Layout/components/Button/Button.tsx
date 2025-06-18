import './Button.css'

export default function Button({
	label,
	onClick,
	className,
}: {
	label: string;
	onClick: () => void;
	className?: string;
}) {
	return (
		<button onClick={onClick} className={`my-button ${className}`}>
			{label}
		</button>
	);
}
