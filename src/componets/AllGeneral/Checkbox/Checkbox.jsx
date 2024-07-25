import React from 'react';

const Checkbox = () => {
    return (
        <div>
            <label className="checkbox">
                <input type="checkbox" className="checkbox__real" name="value-01" />
                <span className="checkbox__fake"></span>
                <span className="checkbox__text">Двор без машин</span>
            </label>

            <label className="checkbox">
                <input type="checkbox" className="checkbox__real" name="value-02" />
                <span className="checkbox__fake"></span>
                <span className="checkbox__text">Высокие потолки</span>
            </label>

            <label className="checkbox">
                <input type="checkbox" className="checkbox__real" name="value-03" />
                <span className="checkbox__fake"></span>
                <span className="checkbox__text">Панорамные окна</span>
            </label>
        </div>
    );
};

export default Checkbox;
