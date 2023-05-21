import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

function ImageGallary({ images, onOpenModal }) {
    return (
        <ul className={css.gallery}>
            {images.map(({ id, webformatURL, largeImageURL, tags }) => (
                <ImageGalleryItem
                    key={id}
                    webformatURL={webformatURL}
                    largeImageURL={largeImageURL}
                    tags={tags}
                    onOpenModal={onOpenModal}
                />
            ))}
        </ul>
    );
}

ImageGallary.propTypes = {
    images: PropTypes.array.isRequired,
    onOpenModal: PropTypes.func.isRequired,
};

export default ImageGallary;