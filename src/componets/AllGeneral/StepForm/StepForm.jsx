import React, { useState } from 'react';

const StepForm = () => {
    const [formSteps, setFormSteps] = useState(0);

    const steps = [
        "Form step 1",
        "Form step 2",
        "Form step 3",
        "Form step 4",
        "Form step 5",
        "Form step 6"
    ];

    const nextStep = () => {
        setFormSteps(prevStep => prevStep + 1);
    };

    const prevStep = () => {
        setFormSteps(prevStep => prevStep - 1);
    };

    const progressWidth = ((formSteps) / (steps.length - 1)) * 100 + '%';

    return (
        <form className="steps__form" onSubmit={(e) => e.preventDefault()}>
            <div className="steps__numbers">
                <div className="progress">
                    <div className="progress__success" style={{ width: progressWidth }}></div>
                </div>
                {steps.map((_, index) => (
                    <div key={index} className={`step__number ${index === formSteps ? 'active__number' : ''}`}>
                        <span>{index + 1}</span>
                    </div>
                ))}
            </div>
            <div className="steps">
                {steps.map((step, index) => (
                    <div key={index} className={`form__step ${index === formSteps ? 'active' : ''}`}>{step}</div>
                ))}
            </div>
            <div className="step__buttons">
                <button className="button prev__step" onClick={prevStep} disabled={formSteps === 0}>PREV</button>
                <button className="button next__step" onClick={nextStep} disabled={formSteps === steps.length - 1}>NEXT</button>
            </div>
        </form>
    );
}

export default StepForm;
