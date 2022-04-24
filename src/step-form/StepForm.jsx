import React, { useEffect, useState ,useRef} from 'react';
import './StepForm.scss';
function StepWrapper({ step, totalSteps, handleStepClick }) {
  return (
    <div className="step-wrapper">
      {totalSteps > 1 &&
        Array(totalSteps)
          .fill('')
          .map((_, i) => {
            return (
              <>
                <span
                  onClick={() => handleStepClick(i)}
                  className={`badge badge-pill bg-dark ${
                    step >= i && 'active-step'
                  }`}
                >
                  {i + 1}
                </span>
                {i !== totalSteps - 1 && (
                  <div
                    className={`connect bg-dark ${step > i && 'active-line'}`}
                  />
                )}
              </>
            );
          })}
    </div>
  );
}
function Stepper({ children, ...props }) {
  const [step, setStep] = useState(0);
  const {formRef}=props
  const forms = React.Children.toArray(children);
  const currentChild =  React.createElement('div', {ref:formRef}, forms[step]) 

  console.log(currentChild);
  const isLastStep = forms.length - 1 === step;
  const isInitialStep = step === 0;
  return (
    <div className="row justify-content-center p-5 ">
      <div className="w-25">
        <StepWrapper
          step={step}
          totalSteps={forms.length}
          handleStepClick={(step) => {
            setStep(step);
          }}
        />
        {currentChild}
        <div className="d-flex justify-content-center my-2">
          {!isInitialStep && (
            <div
              className="btn btn-sm btn-primary mx-2"
              onClick={() => {
                setStep((prev) => prev - 1);
              }}
            >
              Prev
            </div>
          )}
          {isLastStep ? (
            <div className="btn btn-sm btn-success">Submit</div>
          ) : (
            <div
              className="btn btn-sm btn-primary"
              onClick={() => {
                if (isLastStep) {
                  return;
                }
                setStep((prev) => prev + 1);
              }}
            >
              Next
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function StepForm() {
  const [userName, setUserName] = useState('');
  const formRef= useRef()
  return (
    <div className="layout ">
      <form autoComplete={false}>
        <Stepper className="container">
          {/*   Account Setup*/}
          <div className="card shadow-lg">
            <div className="card-header">CREATE YOUR ACCOUNT</div>
            <div className="card-body ">
              <input
                type="email"
                className="form-control my-2"
                placeholder="Email"
              />
              <input
                type="Password"
                className="form-control my-2"
                placeholder="Password"
              />
              <input
                type="Password"
                className="form-control my-2"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          {/* Personal Detail*/}
          <div className="card shadow-lg ">
            <div className="card-header">
              PERSONAL DETAILS
              <br />
              We will never sell it
            </div>
            <div className="card-body ">
              <input
                type="text"
                className="form-control my-2"
                placeholder="First Name"
              />
              <input
                type="text"
                className="form-control my-2"
                placeholder="Last Name"
              />

              <input
                type="text"
                className="form-control my-2"
                placeholder="Phone"
              />

              <textarea
                type="textarea"
                className="form-control my-2"
                placeholder="Address"
              />
            </div>
          </div>
          {/*  SOCIAL PROFILES*/}
          <div className="card shadow-lg">
            <div className="card-header">
              SOCIAL PROFILES <br />
              Your presence on the social network
            </div>
            <div className="card-body ">
              <input
                type="text"
                className="form-control my-2"
                placeholder="Twitter"
              />
              <input
                type="text"
                className="form-control my-2"
                placeholder="Facebook"
              />

              <input
                type="text"
                className="form-control my-2"
                placeholder="Google Plus"
              />
            </div>
          </div>
        </Stepper>
      </form>
    </div>
  );
}
