import * as React from "react";
import ReactDOM from 'react-dom';

type showProps = {
    visible: boolean;
    children: React.ReactNode;
    title: string;
    onClose: () => void

}

const Dialog: React.FC<showProps> = (props) => {
    const {visible, title, onClose} = props;
    return ReactDOM.createPortal(
        <div className={`modal ${visible ? 'modal-open' : ''} items-center`}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">{title}</h3>
                <div>{ props.children}</div>
                <div className="modal-action mt-3">
                    <label onClick={onClose}
                           className="btn btn-sm">关闭</label>
                </div>
            </div>
        </div>
        ,
        document.body
    )
}

export default Dialog
