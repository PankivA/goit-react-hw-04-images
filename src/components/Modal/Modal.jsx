import PropTypes from 'prop-types';
import css from './Modal.module.css';
import { useEffect } from 'react';

function Modal({largeImageURL, onToggleModal}){
  useEffect(() => {
    const handleKeyDown = evt => {
      if( evt.code === 'Escape'){
        onToggleModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onToggleModal]);

  const handleBackdropClick= evt =>{
    if (evt.currentTarget === evt.target) {
    onToggleModal();
   }
  };

  return (
    <div className={css.overlay} onClick={handleBackdropClick}>
        <div className={css.modal}>
             <img src={largeImageURL} alt="" />
         </div>
     </div>
      );

};

Modal.propTypes = {
onToggleModal:PropTypes.func.isRequired,
};

export default Modal;

