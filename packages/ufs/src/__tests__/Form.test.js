import React from 'react'
import { mount } from 'enzyme'
import { spy } from 'sinon'

import UFS from '../Form'

describe('<UFS/>', () => {
  it('should provide an API', () => {
    const validateSpy = spy()

    const validate = ({ message }) => {
      validateSpy()
      return {
        message: !message ? 'Please include a message' : undefined,
      }
    }

    const handleSubmit = spy()

    const rendered = mount(
      <UFS
        validate={validate}
        handleSubmit={handleSubmit}
      >
        {({ handleSubmit, handleUpdate }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="message"
              required
              onChange={handleUpdate('message')}
            />
            <button>Submit</button>
          </form>
        )}
      </UFS>
    )

    rendered.find('input').simulate('change', {
      target: {
        value: 'Hello',
      }
    })

    rendered.find('form').simulate('submit')
    expect(handleSubmit.called).toBe(true)
    expect(validateSpy.called).toBe(true)
  })

  it('should allow passing a component', () => {
    const validateSpy = spy()

    const validate = ({ message }) => {
      validateSpy()
      return {
        message: !message ? 'Please include a message' : undefined,
      }
    }

    const handleSubmit = spy()

    const InternalForm = ({ handleSubmit, handleUpdate }) => (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          required
          onChange={handleUpdate('message')}
        />
        <button>Submit</button>
      </form>
    )

    const rendered = mount(
      <UFS
        validate={validate}
        handleSubmit={handleSubmit}
        component={InternalForm}
      />
    )

    rendered.find('input').simulate('change', {
      target: {
        value: 'Hello',
      }
    })

    rendered.find('form').simulate('submit')
    expect(handleSubmit.called).toBe(true)
    expect(validateSpy.called).toBe(true)
  })
})
