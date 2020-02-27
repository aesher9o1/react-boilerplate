import React from 'react'
import { mount } from 'enzyme'
import Register from '../Register'

describe('Email Form Field Tests', () => {
  let wrapper
  const invalidClass = 'is-invalid'
  beforeEach(() => {
    wrapper = mount(<Register />)
  })

  test('it should check that there is only one email field', () => {
    const input = wrapper.find(`[data-test='email']`)
    expect(input).toHaveLength(1)
  })

  test('it should detect change of valid email', () => {
    const CORRECT_EMAIL = 'aashiskumar986@gmail.com'
    const input = wrapper.find(`[data-test='email']`)

    input.simulate('change', {
      target: {
        id: 'email',
        value: CORRECT_EMAIL
      }
    })

    const updatedInput = wrapper.find(`[data-test='email']`)
    expect(updatedInput.props().value).toBe(CORRECT_EMAIL)
  })

  test('it should detect change of invalid email', () => {
    const WRONG_EMAIL = 'aashiskumar'
    const input = wrapper.find(`[data-test='email']`)

    input.simulate('change', {
      target: {
        id: 'email',
        value: WRONG_EMAIL
      }
    })

    const updatedInput = wrapper.find(`[data-test='email']`)
    expect(updatedInput.props().value).toBe(WRONG_EMAIL)
    expect(updatedInput.hasClass(invalidClass)).toBeTruthy()
  })
})

describe('Password Form Field Tests', () => {
  let wrapper
  const invalidClass = 'is-invalid'
  beforeEach(() => {
    wrapper = mount(<Register />)
  })

  test('it should check that there is only one password field', () => {
    const input = wrapper.find(`[data-test='password']`)
    expect(input).toHaveLength(1)
  })

  test('it should check that there is only one password field and detects change of valid password', () => {
    const CORRECT_PASSWORD = 'aashiskumar986@gmail.com'
    const input = wrapper.find(`[data-test='password']`)

    input.simulate('change', {
      target: {
        id: 'password',
        value: CORRECT_PASSWORD
      }
    })

    const updatedInput = wrapper.find(`[data-test='password']`)
    expect(updatedInput.props().value).toBe(CORRECT_PASSWORD)
  })

  test('it should check that there is only one password field and detects change of invalid password', () => {
    const WRONG_PASSWORD = ''
    const input = wrapper.find(`[data-test='password']`)
    expect(input).toHaveLength(1)

    input.simulate('change', {
      target: {
        id: 'password',
        value: WRONG_PASSWORD
      }
    })

    const updatedInput = wrapper.find(`[data-test='password']`)
    expect(updatedInput.props().value).toBe(WRONG_PASSWORD)
    expect(updatedInput.hasClass(invalidClass)).toBeTruthy()
  })
})

describe('First and Last Name Form Field Tests', () => {
  let wrapper
  const invalidClass = 'is-invalid'
  beforeEach(() => {
    wrapper = mount(<Register />)
  })

  test('it should check that there is only one first name field', () => {
    const input = wrapper.find(`[data-test='first_name']`)
    expect(input).toHaveLength(1)
  })

  test('it should check that there is only one last name field', () => {
    const input = wrapper.find(`[data-test='last_name']`)
    expect(input).toHaveLength(1)
  })

  test('it should detect valid first and last names', () => {
    const CORRECT_NAME = 'aashiskumar986@gmail.com'
    const inputFName = wrapper.find(`[data-test='first_name']`)
    const inputLName = wrapper.find(`[data-test='first_name']`)

    inputFName.simulate('change', {
      target: {
        id: 'first_name',
        value: CORRECT_NAME
      }
    })

    inputLName.simulate('change', {
      target: {
        id: 'last_name',
        value: CORRECT_NAME
      }
    })

    const updatedInputFName = wrapper.find(`[data-test='first_name']`)
    const updatedInputLName = wrapper.find(`[data-test='last_name']`)

    expect(updatedInputFName.props().value).toBe(CORRECT_NAME)
    expect(updatedInputLName.props().value).toBe(CORRECT_NAME)
  })

  test('it should detect invalid first name and last name ', () => {
    const WRONG_NAME = '123'
    const inputFName = wrapper.find(`[data-test='first_name']`)
    const inputLName = wrapper.find(`[data-test='last_name']`)

    inputFName.simulate('change', {
      target: {
        id: 'first_name',
        value: WRONG_NAME
      }
    })

    inputLName.simulate('change', {
      target: {
        id: 'last_name',
        value: WRONG_NAME
      }
    })

    const updatedInputFName = wrapper.find(`[data-test='first_name']`)
    const updatedInputLName = wrapper.find(`[data-test='last_name']`)

    expect(updatedInputFName.props().value).toBe(WRONG_NAME)
    expect(updatedInputLName.props().value).toBe(WRONG_NAME)
    expect(updatedInputFName.hasClass(invalidClass)).toBeTruthy()
    expect(updatedInputLName.hasClass(invalidClass)).toBeTruthy()
  })
})

describe('Country Code Form Field Tests', () => {
  let wrapper
  const invalidClass = 'is-invalid'
  beforeEach(() => {
    wrapper = mount(<Register />)
  })

  test('it should check that there is only one country code field', () => {
    const input = wrapper.find(`[data-test='country_code']`)
    expect(input).toHaveLength(1)
  })

  test('it should detect change of valid country code', () => {
    const CORRECT_CODE = '+91'
    const input = wrapper.find(`[data-test='country_code']`)
    expect(input).toHaveLength(1)

    input.simulate('change', {
      target: {
        id: 'country_code',
        value: CORRECT_CODE
      }
    })

    const updatedInput = wrapper.find(`[data-test='country_code']`)
    expect(updatedInput.props().value).toBe(CORRECT_CODE)
  })

  test('it should detect change of invalid country code', () => {
    const WRONG_CODE = 'asdsf'
    const input = wrapper.find(`[data-test='country_code']`)
    expect(input).toHaveLength(1)

    input.simulate('change', {
      target: {
        id: 'country_code',
        value: WRONG_CODE
      }
    })

    const updatedInput = wrapper.find(`[data-test='country_code']`)
    expect(updatedInput.props().value).toBe(WRONG_CODE)
    expect(updatedInput.hasClass(invalidClass)).toBeTruthy()
  })
})

describe('Primary Phone Form Field Tests', () => {
  let wrapper
  const invalidClass = 'is-invalid'
  beforeEach(() => {
    wrapper = mount(<Register />)
  })

  test('it should check that there is only one primary phone field', () => {
    const input = wrapper.find(`[data-test='phone_primary']`)
    expect(input).toHaveLength(1)
  })

  test('it should detects change of valid phone', () => {
    const CORRECT_PHONE = '9550241971'
    const input = wrapper.find(`[data-test='phone_primary']`)
    expect(input).toHaveLength(1)

    input.simulate('change', {
      target: {
        id: 'phone_primary',
        value: CORRECT_PHONE
      }
    })

    const updatedInput = wrapper.find(`[data-test='phone_primary']`)
    expect(updatedInput.props().value).toBe(CORRECT_PHONE)
  })

  test('it detects change of invalid phone', () => {
    const WRONG_PHONE = '678891923'
    const input = wrapper.find(`[data-test='phone_primary']`)
    expect(input).toHaveLength(1)

    input.simulate('change', {
      target: {
        id: 'phone_primary',
        value: WRONG_PHONE
      }
    })

    const updatedInput = wrapper.find(`[data-test='phone_primary']`)
    expect(updatedInput.props().value).toBe(WRONG_PHONE)
    expect(updatedInput.hasClass(invalidClass)).toBeTruthy()
  })
})
