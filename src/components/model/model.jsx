import ReactDOM from 'react-dom';
import './model.css';
const Model = (props) => {
    return (
        ReactDOM.createPortal(
            <div className="portal-container">
                {props.children}
            </div>,
            document.getElementById('root-model'))
    )
}
export default Model