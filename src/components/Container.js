import React from 'react';
import PropTypes from 'prop-types';

export default function Container({ wide = false, className = '', children = null }) {
    const classNameContainer = wide ? 'container-fluid' : 'container';

    return (
        <div className={className}>
            <div className={`${classNameContainer}`}>
                {children}
            </div>
        </div>
    );
}

Container.propTypes = {
    wide: PropTypes.bool,
};
