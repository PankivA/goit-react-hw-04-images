import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export default class Modal extends Component {
    static propTypes = {
        url: PropTypes.string.isRequired,
        onClose: PropTypes.func.isRequired,
    };

    state = {}

    componentDidMount() {
        window.addEventListener('keydown', this.onEscClick);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.onEscClick);
    }

    clickBackdrop = event => {
        if (event.target === event.currentTarget) {
            this.props.onClose();
        }
    }

    onEscClick = event => {
        if (event.code === 'Escape') {
            this.props.onClose();
        }
    }


    render() {
        return (
            <div className={css.overlay} onClick={this.clickBackdrop}>
                <div className={css.modal}>
                    <img src={this.props.url} alt="" />
                </div>
            </div>
        )
    }
}