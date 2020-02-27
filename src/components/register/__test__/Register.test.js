import React from 'react'
import { mount } from 'enzyme'
import Register from '../Register'

describe('Register Test', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(<Register />)
  })

  test('it should check if emails are valid', () => {
    const CORRECT_EMAIL = 'aashiskumar986@gmail.com'
    const input = wrapper.find('#email').at(0)
    expect(input).toHaveLength(1)

    input.simulate('change', { target: { id: 'email', value: CORRECT_EMAIL } })
    wrapper.update()

    expect(input.props().value).toBe(CORRECT_EMAIL)
  })
})
