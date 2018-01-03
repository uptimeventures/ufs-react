# UFS

[![CI Status
Badge](https://travis-ci.org/uptimeventures/ufs.svg?branch=master)](https://travis-ci.org/uptimeventures/ufs)
[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![Made by Uptime Ventures
badge](https://img.shields.io/badge/made_by-Uptime_Ventures-fcb040.svg)](https://www.uptime.ventures)

Elegant, lightweight form validation and processing for React and React Native.

## Installation

`npm install @uptimeventures/ufs @uptimeventures/ufs-dom`

## Usage

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
    )}
  </Form>
)

const validate = ({ name, email }) => ({
  name: !name ? 'Please provide your name.' : undefined,
  email: !email ? 'Please provide your email.' : undefined,
})

const handleSubmit = values => {}
```

## Why create another form library?

Existing solutions were either too large (requiring Redux or another state
management solution often just to manage forms), or relied heavily on
browser-centric handlers. While React Native's event system mirrors most of the
events and structure provided by React DOM, a few key differences exist.

The tooling and handler pattern proposed in UFS allows developers to be
incredibly productive by reusing most of the logic for all platforms.

## Status

UFS is being developed alongside several internal projects at Uptime
Ventures, so expect frequent API changes prior to `1.0.0`.

## What's with the name?

UFS: Universal Form System. Also known as the Uptime Form System, named after
Uptime Ventures, the Denver, Colorado digital consultancy.

## License

&copy; 2017 Uptime Ventures, Ltd. All rights reserved. Released under the
[3-Clause BSD License](LICENSE.md).
