"use client";

import React from 'react';
import PropTypes from 'prop-types';
import Container from '@/components/Container';
import Link from '@/components/Link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/legacy/image'

export default function ContentSlide({ layout = 'image-content', images = [], content = {} }) {
    const { title, subtitle, description, buttons = [] } = content;
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

    const renderImages = () => (
        <div className="w-full md:w-1/2">
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {images.map((image, index) => (
                        <div className="embla__slide" key={index}>
                            {/* <div className="h-96 md:h-auto overflow-hidden">
                                <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                            </div> */}
                            <div className="h-96 md:h-full md:max-h-[36rem] overflow-hidden relative">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    layout="fill"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="w-full h-full object-cover min-h-full"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderDescription = () => {
        if (Array.isArray(description)) {
            return description.map((desc, index) => (
                <p key={index} className={'mb-6 text-neutral-600'}>
                    {desc}
                </p>
            ));
        }
        return <p className={'mb-6 text-neutral-600'}>{description}</p>;
    };

    const renderContent = () => (
        <div className="w-full md:w-1/2">
            <h2 className="text-5xl font-bold mb-8 text-black">{title}</h2>
            <h3 className="text-3xl mb-6 text-neutral-800">{subtitle}</h3>
            {renderDescription()}
            <div className="flex gap-4">
                {buttons.map((button, index) => (
                    <Link key={index} {...button} />
                ))}
            </div>
        </div>
    );

    return (
        <Container wide={false}>
            <div className="flex flex-wrap md:flex-nowrap gap-16 my-32">
                {layout === 'image-content' ? (
                    <>
                        {renderImages()}
                        {renderContent()}
                    </>
                ) : (
                    <>
                        {renderContent()}
                        {renderImages()}
                    </>
                )}
            </div>
        </Container>
    );
}

ContentSlide.propTypes = {
    wide: PropTypes.bool,
    layout: PropTypes.oneOf(['image-content', 'content-image']),
    images: PropTypes.arrayOf(
        PropTypes.shape({
            alt: PropTypes.string,
            src: PropTypes.string,
        })
    ),
    content: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        description: PropTypes.string,
        buttons: PropTypes.arrayOf(
            PropTypes.shape({
                label: PropTypes.string,
                href: PropTypes.string,
                title: PropTypes.string,
            })
        ),
    }),
};
