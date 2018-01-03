// @flow

// Copyright 2017 Uptime Ventures, Ltd. All rights reserved.
// Use of this source code is governed by a BSD-style license
// that can be found in LICENSE.md, at the root of this repository.

import React, { Component } from 'react'

import FormField from './FormField'

export type Props = {
  name: string,
  type?: string,
  value?: string,
}

class Input extends Component<Props, {}> {
  static defaultProps = {
    type: 'text',
  }

  render() {
    return (
      <input
        {...this.props}
      />
    )
  }
}

export default FormField(Input)
