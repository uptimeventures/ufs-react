import React, { Component } from 'react'
import PropTypes from 'prop-types'

export type Props = {
  name?: string,
  for?: string,
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

    render() {
      return (
        <FieldComponent
          api={this.api}
          {...this.props}
        />
      )
    }
  }

  return ConnectedFormField
}

export default FormField
