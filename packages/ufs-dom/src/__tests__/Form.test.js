import React from 'react'
import { mount } from 'enzyme'

import UFS from '@uptimeventures/ufs-react'
import Input from '../Input'

describe('<UFS/> DOM integration', () => {
  it('should gather fields', () => {
    const rendered = mount(
      <UFS>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
            />
          </form>
        )}
      </UFS>
    )

    rendered.find('input').simulate('change', {
      target: {
        value: 'Jean Luc',
      }
    })

    expect(rendered.state().values.name).toBe('Jean Luc')
  })
})
