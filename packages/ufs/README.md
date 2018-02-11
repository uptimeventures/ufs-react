# ufs

Elegant, lightweight form validation and processing for React and React Native.

## Installation

UFS is a two-part system. You'll need this module, plus a visual adapter layer.
You're welcome to build your own, but we've provided a few handy components via
the `@uptimeventures/ufs-dom` package.

First, run `npm install @uptimeventures/ufs`. Then, add the component layer of
your choice. Here, we'll use
[`ufs-dom`](https://www.npmjs.com/@uptimeventures/ufs-dom):

```javascript
import React from 'react'
import Form from '@uptimeventures/ufs'
import { Input } from '@uptimeventures/ufs-dom'

const App = () => (
  <Form
    handleSubmit={handleSubmit}
    validate={validate}
  >
    {({ handleSubmit }) => (
      <Input
        label="Name"
        name="name"
        required
      />
      <Input
        label="Email Address"
        name="email"
        type="email"
        required
      />
      <button> {/* Available since we're rendering on DOM */}
        Submit
      </button>
    )}
  </Form>
)

const validate = ({ name, email }) => ({
  name: !name ? 'Please provide your name.' : undefined,
  email: !email ? 'Please provide your email.' : undefined,
})

const handleSubmit = values => {}
```

For more details, including information on other visual integration layers,
visit [the GitHub page](https://github.com/uptimeventures/ufs).

## License

Copyright 2017 Uptime Ventures, Ltd. All rights reserved. Released under the
[3-Clause BSD License](LICENSE.md).
