import React from 'react'
import { mount } from 'enzyme'
import Register from '../Register'

describe('Register Test', () => {
  const wrapper = mount(<Register />)

  test('it should check if emails are valid', () => {
    const CORRECT_EMAIL = 'aashiskumar986@gmail.com'
    const input = wrapper.find('#email')
    expect(input).toHaveLength(1)

    input.simulate('change', { target: { value: CORRECT_EMAIL } })
    wrapper.update()
    expect(wrapper.find('#email').props().value).toBe(CORRECT_EMAIL)
  })
})
