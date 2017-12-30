// @flow

// Copyright 2017 Uptime Ventures, Ltd. All rights reserved.
// Use of this source code is governed by a BSD-style license
// that can be found in LICENSE.md, at the root of this repository.

import React, { Component } from 'react'

import FormField from './FormField'

export type Props = {
  api: Object,
  name: string,
  type?: string,
  value?: string,
}

class Input extends Component<Props, {}> {
  static defaultProps = {
    type: 'text',
  }

  get value() {
    const {
      value: valueProp,
      name,
      api: { values },
    } = this.props

    if (valueProp) {
      return valueProp
    }

    if (values && values.hasOwnProperty(name)) {
      return values[name]
    }

    return ''
  }

  render() {
    const {
      api: { handleUpdate },
      name,
      ...rest
    } = this.props

    return (
      <input
        name={name}
        onChange={handleUpdate(name)}
        {...rest}
      />
    )
  }
}

export default FormField(Input)
