import React from "react";
import TextInput from "./Text-input";
import PropTypes from "prop-types";

const Form = ({
  values,
  agreement,
  inputFieldHandler,
  errors,
  agreementHandler,
  submitHandler,
}) => {
  return (
    <form onSubmit={submitHandler}>
      <TextInput
        className="form-control"
        name="name"
        label="Name"
        placeholder="Your Name"
        value={values.name}
        error={errors.name}
        onChange={inputFieldHandler}
      />
      <TextInput
        className="form-control"
        name="email"
        type="email"
        label="Email"
        placeholder="example@gmail.com"
        value={values.email}
        error={errors.email}
        onChange={inputFieldHandler}
      />
      <TextInput
        className="form-control"
        name="password"
        type="password"
        label="Password"
        placeholder="****"
        value={values.password}
        error={errors.password}
        onChange={inputFieldHandler}
      />
      <TextInput
        className="form-control"
        name="birthday"
        type="date"
        label="Birthday"
        value={values.birthday}
        error={errors.birthday}
        onChange={inputFieldHandler}
      />
      <div>
        <div className="form-check form-check-inline">
          <input
            type="radio"
            name="gender"
            value="Male"
            className="form-check-input"
            onChange={inputFieldHandler}
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            type="radio"
            name="gender"
            value="Female"
            className="form-check-input"
            onChange={inputFieldHandler}
          />
          <label className="form-check-label">Female</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            type="radio"
            name="gender"
            value="Other"
            className="form-check-input"
            onChange={inputFieldHandler}
          />
          <label className="form-check-label">Other</label>
        </div>
        {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name="agreement"
          checked={agreement}
          onChange={agreementHandler}
        />
        <label className="form-check-label">I Agree</label>
      </div>
      <button type="submit" className="btn-primary" disabled={!agreement}>
        Create User
      </button>
    </form>
  );
};

Form.propTypes = {
  values: PropTypes.object.isRequired,
  agreement: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  inputFieldHandler: PropTypes.func.isRequired,
  agreementHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
};
export default Form;
