import React, { useEffect, useState, useRef } from 'react';
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
  const formRef = useRef();
  const forms = [AccountSetup, PersonalDetail, SocialProfile];
  const currentChild = React.createElement(forms[step], {
    ref: formRef,
  });
  const isLastStep = forms.length - 1 === step;
  const isInitialStep = step === 0;
  useEffect(() => {
    console.log(formRef);
  }, [formRef]);
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
  return (
    <div className="layout ">
      <form autoComplete={false}>
        <Stepper className="container" />
      </form>
    </div>
  );
}

function AccountSetup() {
  return (
    <>
      {' '}
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
    </>
  );
}

function PersonalDetail() {
  return (
    <>
      {' '}
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
    </>
  );
}

function SocialProfile() {
  return (
    <>
      {' '}
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
    </>
  );
}
