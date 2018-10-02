import React from 'react'
import { mount } from 'enzyme'

import UFS from '@uptimeventures/ufs-react'
import Label from '../Label'

describe('<Label/>', () => {
  it ('should return children when error is clear', () => {
    const rendered = mount(
      <UFS
        render={({ handleSubmit, handleUpdate }) => (
          <form onSubmit={handleSubmit}>
            <Label
              for="email"
            >
              Email
            </Label>
            <input
              type="email"
              onChange={handleUpdate('email')}
            />
          </form>
        )}
      />
    )

    expect(rendered.contains(<label htmlFor="email">Email</label>)).toBe(true)
  })
})
