import React from 'react';
import PropTypes from 'prop-types';
import Container from '@/components/Container';
import Link from '@/components/Link';

const Hero = ({ title = null, description, buttons = [], style = 'primary' }) => {
    let containerClasses = 'flex items-center justify-center h-[calc(100vh-6rem)] text-center ';
    let textClasses = '';

    switch (style) {
        case 'primary':
            containerClasses += 'bg-yellow-300';
            textClasses += 'text-black';
            break;
        case 'secondary':
            containerClasses += 'bg-black';
            textClasses += 'text-white';
            break;
        case 'white-background':
            containerClasses += 'bg-white';
            textClasses += 'text-black';
            break;
        case 'yellow-text':
            containerClasses += 'bg-white';
            textClasses += 'text-yellow-300';
            break;
        default:
            containerClasses += 'bg-yellow-300';
            textClasses += 'text-black';
            break;
    }

    const renderDescription = () => {
        if (Array.isArray(description)) {
            return description.map((desc, index) => (
                <p key={index} className={`text-2xl mb-8 ${textClasses}`}>
                    {desc}
                </p>
            ));
        }
        return <p className={`text-2xl mb-8 ${textClasses}`}>{description}</p>;
    };

    return (
        <Container className={containerClasses}>
            <div className="max-w-3xl mx-auto">
                {title && <h1 className={`text-5xl font-bold mb-4 ${textClasses}`}>{title}</h1>}
                {renderDescription()}
                <div className="flex justify-center space-x-4 mt-16">
                    {buttons.map((button, index) => (
                        <Link key={index} {...button} isButton={true} />
                    ))}
                </div>
            </div>
        </Container>
    );
};

Hero.propTypes = {
    title: PropTypes.string,
    description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            href: PropTypes.string,
            title: PropTypes.string,
        })
    ),
    style: PropTypes.oneOf(['primary', 'secondary', 'white-background', 'yellow-text']),
};

export default Hero;
