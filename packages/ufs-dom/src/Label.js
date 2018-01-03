// @flow

// Copyright 2017 Uptime Ventures, Ltd. All rights reserved.
// Use of this source code is governed by a BSD-style license
// that can be found in LICENSE.md, at the root of this repository.

import React, { type Node, Component } from 'react'

import withAPI from './withAPI'

export type Props = {
  api: Object,
  for: string,
  children: Node,
}

class Label extends Component<Props, {}> {
  render() {
    const {
      api: { errors },
      for: name,
      children,
      ...rest
    } = this.props

    return (
      <label
        htmlFor={name}
        {...rest}
      >
        {errors[name] ? errors[name] : children}
      </label>
    )
  }
}

export default withAPI(Label)
