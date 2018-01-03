// @flow

// Copyright 2017 Uptime Ventures, Ltd. All rights reserved.
// Use of this source code is governed by a BSD-style license
// that can be found in LICENSE.md, at the root of this repository.

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export type Props = {
  name: string,
}

function FormField(FieldComponent) {
  class ConnectedFormField extends Component<Props, {}> {
    static contextTypes = {
      form: PropTypes.object,
    }

    get api() {
      return {
        ...this.context.form,
      }
    }

    get name() {
      return this.props.name
    }

    // Update the parent handler when DOM events fire.
    onChange = (e) => {
      if (e.target.value) {
        const name = this.name
        const { handleUpdate } = this.api
        handleUpdate(name)(e.target.value)
      }
    }

    render() {
      return (
        <FieldComponent
          onChange={this.onChange}
          {...this.props}
        />
      )
    }
  }

  return ConnectedFormField
}

export default FormField
