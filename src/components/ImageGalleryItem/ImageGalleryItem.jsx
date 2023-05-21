import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

function ImageGalleryItem({ webformatURL, largeImageURL, tags, onOpenModal }) {
    return (
        <li className={css.item}>
            <img className={css.image}
                src={webformatURL}
                data-source={largeImageURL}
                alt={tags}
                onClick={onOpenModal}
            />
        </li>
    );
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL:PropTypes.string.isRequired,
    tags:PropTypes.string.isRequired, 
}

export default ImageGalleryItem;