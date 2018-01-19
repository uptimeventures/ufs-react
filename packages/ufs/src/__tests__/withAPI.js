import React from 'react'
import { mount } from 'enzyme'

import UFS from '../Form'
import withAPI from '../withAPI'

describe('withAPI', () => {
  it('should provide API as props', () => {
    const Label = withAPI(({ api: { errors } }) => (
      <div>
        {errors.name ? errors.name : 'Email'}
      </div>
    ))

    const validate = ({ name }) => ({
      name: !name ? 'Please enter your name' : undefined,
    })

    const rendered = mount(
      <UFS
        validate={validate}
      >
        {({ handleSubmit, handleUpdate }) => (
          <form onSubmit={handleSubmit}>
            <Label/>
            <input
              name="name"
              onChange={handleUpdate('name')}
            />
            <button>Submit</button>
          </form>
        )}
      </UFS>
    )

    rendered.find('form').simulate('submit')
    expect(rendered.contains('Please enter your name')).toBe(true)
  })
})
