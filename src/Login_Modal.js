import './css_doc/Login_modal.css';

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    console.log('I am clicked');
  
    return (
      <div className={showHideClassName}>
         
               
                <section className="modal-main">
                    <button type="button" onClick={handleClose} id = 'close'>
                        X
                    </button>
                {children}
                
                </section>
          
       
      </div>
    );
  };

export default Modal;