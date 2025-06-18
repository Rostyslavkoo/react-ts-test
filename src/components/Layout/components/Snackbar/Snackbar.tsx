import './Snackbar.css'

export default function Snackbar({
    message,
    style
}: {
    message: string;
    style?: React.CSSProperties;
}) {
    return (
        <div className="my-snackbar" style={style}>
            <div className="my-snackbar-content">
                <span>{message}</span>
            </div>
        </div>
    );
}