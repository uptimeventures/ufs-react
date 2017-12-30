import React from 'react'
import { mount } from 'enzyme'

import UFS from '../../../ufs/src'
import Textarea from '../Textarea'

describe('<Textarea/>', () => {
  it('should accept and validate input', () => {
    const rendered = mount(
      <UFS>
        {({ handleSubmit, errors }) => (
          <form onSubmit={handleSubmit}>
            <Textarea
              name="message"
            />
            <button>Submit</button>
          </form>
        )}
      </UFS>
    )

    const input = rendered.find('textarea').instance().value = 'Hello'
    expect(rendered.find('textarea').instance().value).toBe('Hello')
  })
})
