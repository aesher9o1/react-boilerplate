/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import {
  isCountryCodeValid,
  isNameValid,
  isPhoneValid,
  isEmailValid
} from '../../utils/Utils'
import './register.less'

function Register() {
  const [formState, setFormState] = useState({
    course_url: '',
    first_name: '',
    last_name: '',
    password: '',
    email: '',
    phone_primary: '',
    country_code: '+91',
    signup_page: '',
    payment_type: '',
    batch: '',
    coupon_code: '',
    objective_of_learning: '',
    utm_campaign: '',
    csrf_test_name: ''
  })

  const [formErrors, setFormErrors] = useState({
    course_url: null,
    first_name: null,
    last_name: null,
    password: null,
    email: null,
    phone_primary: null,
    country_code: null,
    signup_page: null,
    payment_type: null,
    batch: null,
    coupon_code: null,
    objective_of_learning: null,
    utm_campaign: null,
    csrf_test_name: null
  })
  const showEmailInvalid = () => {
    return formErrors.email ? (
      <small id="emailErr" className="form-text text-muted">
        Enter a valid email
      </small>
    ) : (
      ''
    )
  }

  const showPhoneInvalid = () => {
    return formErrors.phone_primary ? (
      <small id="emailErr" className="form-text text-muted">
        Enter a valid mobile number
      </small>
    ) : (
      ''
    )
  }

  const showErrorIconForId = (id) => {
    return formErrors[id] ? (
      <span className="fa fa-exclamation-circle error-icon" aria-hidden="true" />
    ) : (
      ''
    )
  }

  const handleFieldChange = (e) => {
    if (e.target.id in formErrors) {
      const newErrorState = { ...formErrors }

      const newFormState = { ...formState }
      newFormState[e.target.id] = e.target.value
      setFormState(newFormState)

      switch (e.target.id) {
        case 'email':
          newErrorState[e.target.id] = !isEmailValid(e.target.value)
          break

        case 'phone_primary':
          newErrorState[e.target.id] = !isPhoneValid(e.target.value)
          break

        case 'first_name':
        case 'last_name':
          newErrorState[e.target.id] = !isNameValid(e.target.value)
          break

        case 'country_code':
          newErrorState[e.target.id] = !isCountryCodeValid(e.target.value)
          break
        default:
          newErrorState[e.target.id] = e.target.value.length < 1
      }

      setFormErrors(newErrorState)
    }
  }

  return (
    <form className="login-form">
      <div className="form-group">
        <label htmlFor="email">
          Email:
          {showEmailInvalid()}
        </label>
        <input
          type="email"
          className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
          id="email"
          name="email"
          value={formState.email}
          aria-describedby="emailErr"
          placeholder="Enter email"
          onChange={handleFieldChange}
        />
        {showErrorIconForId('email')}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          className={`form-control ${formErrors.password ? 'is-invalid' : ''}`}
          id="password"
          placeholder="Enter Internshala password"
          onChange={handleFieldChange}
        />
        {showErrorIconForId('password')}
        <small className="form-text text-muted">
          <a href="google.com">Forgot Password?</a>
        </small>
      </div>
      <div style={{ flexDirection: 'row', display: 'flex', width: '100%' }}>
        <div className="flex1">
          <div className="form-group">
            <label htmlFor="first_name">First Name:</label>
            <input
              type="test"
              id="first_name"
              placeholder="John"
              name="first_name"
              className={`form-control ${formErrors.first_name ? 'is-invalid' : ''}`}
              onChange={handleFieldChange}
            />
            {showErrorIconForId('first_name')}
          </div>
        </div>
        &nbsp;&nbsp;
        <div className="flex1">
          <div className="form-group">
            <label htmlFor="last_name">Last Name:</label>
            <input
              type="text"
              placeholder="Doe"
              id="last_name"
              name="last_name"
              onChange={handleFieldChange}
              className={`form-control ${formErrors.last_name ? 'is-invalid' : ''}`}
            />
            {showErrorIconForId('last_name')}
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="country_code" className="control-label">
          Mobile Number:{showPhoneInvalid()}
        </label>
        <div className="form-row" id="mobile_number_container">
          <div className="form-group col-md-2">
            <input
              type="text"
              className={`form-control ${
                formErrors.country_code ? 'is-invalid' : ''
              }`}
              id="country_code"
              name="country_code"
              autoComplete="none"
              placeholder="+91"
              onChange={handleFieldChange}
            />
            {showErrorIconForId('country_code')}
          </div>
          <div className="form-group col-md-10">
            <input
              type="text"
              className={`form-control ${
                formErrors.phone_primary ? 'is-invalid' : ''
              }`}
              id="phone_primary"
              placeholder="8586080747"
              onChange={handleFieldChange}
            />
            {showErrorIconForId('phone_primary')}
          </div>
        </div>
      </div>
      <div className="price-container">
        <p>
          <i className="fa fa-inr" aria-hidden="true" /> <span>1349</span>/-
          &nbsp;&nbsp;{' '}
          <span className="registration_fees_price_container">
            Registration fees
          </span>
        </p>
      </div>
      <div className="form-group">
        <button
          type="button"
          className="btn btn-primary contest_register_now"
          onClick={(e) => {
            e.preventDefault()
            console.table(formState)
          }}
        >
          Register Now
        </button>
      </div>
    </form>
  )
}

export default Register
