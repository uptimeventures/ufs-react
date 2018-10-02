import React from 'react'
import { mount } from 'enzyme'

import UFS from '@uptimeventures/ufs-react'
import Input from '../Input'

describe('<Input/>', () => {
  it('should accept and validate input', () => {
    const validate = ({ email }) => ({
      email: !email ? 'Please input email' : undefined,
    })

    const rendered = mount(
      <UFS
        validate={validate}
      >
        {({ handleSubmit, errors }) => (
          <form onSubmit={handleSubmit}>
            {errors.email ? (
              <div>errors.email</div>
            ) : undefined}
            <Input
              name="email"
              type="text"
            />
            <button>Submit</button>
          </form>
        )}
      </UFS>
    )

    const input = rendered.find('input').instance().value = 'test@example.com'
    expect(rendered.find('input').instance().value).toBe('test@example.com')
  })
})
