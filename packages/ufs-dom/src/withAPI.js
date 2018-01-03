// @flow

// Copyright 2017 Uptime Ventures, Ltd. All rights reserved.
// Use of this source code is governed by a BSD-style license
// that can be found in LICENSE.md, at the root of this repository.

import React, { Component } from 'react'
import PropTypes from 'prop-types'

function withAPI(WrappedComponent) {
  class WrappedWithAPI extends Component {
    static contextTypes = {
      form: PropTypes.object,
    }

    get api() {
      return {
        ...this.context.form,
      }
    }

    render() {
      return (
        <WrappedComponent
          api={this.api}
          {...this.props}
        />
      )
    }
  }

  return WrappedWithAPI
}

export default withAPI
