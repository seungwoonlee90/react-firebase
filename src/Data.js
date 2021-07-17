import React from 'react';
import PropTypes from 'prop-types';

function Data( {title, body} ) {
    return (
    <div className="data">
        <div className="data_data">
            <h3 className="data_title"> {title} </h3>
            <p className="data_body"> {body}</p>
        </div>
    </div>
    )
}

Data.propTypes = {
    title : PropTypes.string.isRequired,
    body : PropTypes.string.isRequired
}

export default Data;