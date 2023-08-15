import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // Import the lightbox styles

function Lightboxs({ thumbnailSrc, largeSrc }) {
    const [isOpen, setIsOpen] = useState(false);

    const openLightbox = () => {
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
    };

    return (
        <div className="d-flex justify-content-center mb-3 border p-2 rounded-3">
            <a href={largeSrc} onClick={openLightbox} className='' target='_blank' rel="noopener noreferrer">
                <img src={thumbnailSrc} alt="Thumbnail" style={{width:'50px'}} />
            </a>

            {isOpen && (
                <Lightbox
                    mainSrc={largeSrc}
                    onCloseRequest={closeLightbox}
                />
            )}
        </div>
    );
}

export default Lightboxs;
