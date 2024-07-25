import React from 'react';

const Checkradio = () => {
    return (
        <div>
            {/* Radio input */}
            <label className="radio__item">
                <input type="radio" name="radio" value="radio__value" className="radio__input" />
                <span className="fake"></span>
                <span>Value</span>
            </label>

            {/* Checkbox input */}
            <label className="checkbox__item">
                <input type="checkbox" name="checkbox" value="checkbox__value" className="checkbox__input" />
                <span className="fake"></span>
                <span>Value</span>
            </label>
        </div>
    );
};

export default Checkradio;
