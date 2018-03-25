// @flow

// Copyright 2018 Uptime Ventures, Ltd. All rights reserved.
// Use of this source code is governed by a BSD-style license
// that can be found in LICENSE.md, at the root of this repository.

import React, { Component } from 'react'

import FormField from './FormField'

export type Props = {
  name: string,
  value?: string,
}

class Textarea extends Component<Props, {}> {
  render() {
    return (
      <textarea
        {...this.props}
      />
    )
  }
}

export default FormField(Textarea)
