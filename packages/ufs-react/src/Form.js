// @flow

// Copyright 2018 Uptime Ventures, Ltd. All rights reserved.
// Use of this source code is governed by a BSD-style license
// that can be found in LICENSE.md, at the root of this repository.

import { Component, createElement } from 'react'
import PropTypes from 'prop-types'
import isPromise from 'is-promise'

export type Props = {
  reset: bool,
  preventDefault: bool,
  validate?: Function,
  context?: Object,
  handleSubmit?: Function,
  component: Function,
  render?: Function,
  children?: Function,
}

export type State = {
  waiting: bool,
  success: bool,
  values: Object,
  errors: Object,
}

export type AssignedState = {
  values?: Object,
  errors?: Object,
}

export type API = {
  errors: Object,
  values: Object,
  handleSubmit: Function,
  handleUpdate: Function,
  success: bool,
  waiting: bool,
}

const hasErrors = (errors) => {
  const filtered = Object.keys(errors).filter(e => errors[e])
  if (filtered.length) {
    return true
  }
  return false
}

export default class Form extends Component<Props, State> {
  static defaultProps = {
    reset: true,
    preventDefault: true,
  }

  static childContextTypes = {
    form: PropTypes.object,
  }

  state = {
    waiting: false,
    success: false,
    values: {},
    errors: {},
  }

  /**
   * reset returns state to original defaults.
   */
  reset = () => {
    this.setState({ values: {}, errors: {} })
  }

  /**
   * onSuccess clears form (if waiting).
   */
  onSuccess = () => {
    this.setState({ waiting: false, success: true })
    if (this.props.reset) {
      this.reset()
    }
  }

  /**
   * onFailure updates state with errors.
   */
  onFailure = (errors: Object) => {
    this.setState({ waiting: false, errors })
  }

  dispatch = () => {
    if (this.props.handleSubmit) {
      const res = this.props.handleSubmit({ ...this.state.values })

      if (res !== undefined && isPromise(res)) {
        this.setState({ waiting: true })

        res.then(() => {
          this.onSuccess()
        }).catch((errors) => {
          this.onFailure(errors)
        })
      }
    }
  }

  /**
   * handleSubmit receives the form submit event,
   * processing and validating data along the way before
   * submitting it to the server if all fields are valid.
   */
  handleSubmit = (e: any) => {
    const { preventDefault, validate } = this.props
    const { values } = this.state

    if (preventDefault) {
      e.preventDefault()
    }

    if (validate) {
      const errors = validate(values)
      if (hasErrors(errors)) {
        return this.onFailure(errors)
      }
    }

    this.dispatch()
  }

  /**
   * handleUpdate updates state on field update.
   */
  handleUpdate = (name: string) => (value: any) => {
    if (value) {
      const { values, errors } = this.state
      const nextState: AssignedState = {
        values: {
          ...values,
          [name]: value,
        },
      }

      if (typeof errors[name] !== 'undefined') {
        nextState.errors = {
          ...errors,
          [name]: undefined,
        }
      }

      this.setState(nextState)
    }
  }

  componentWillMount() {
    if (this.props.context) {
      const { values = {}, errors = {} } = this.props.context
      const newState = {}

      if (Object.keys(values).length) {
        newState.values = values
      }

      if (Object.keys(errors).length) {
        newState.errors = errors
      }

      this.setState(newState)
    }
  }

  componentWillUnmount() {
    if (this.props.reset) {
      this.reset()
    }
  }

  get api(): API {
    return {
      handleSubmit: this.handleSubmit,
      handleUpdate: this.handleUpdate,
      values: this.state.values,
      errors: this.state.errors,
      success: this.state.success,
      waiting: this.state.waiting,
    }
  }

  getChildContext() {
    return {
      form: this.api,
    }
  }

  render() {
    const { component, children, render } = this.props

    if (component) {
      return createElement(component, this.api)
    }

    if (children) {
      return children(this.api)
    }

    if (render) {
      return render(this.api)
    }

    return null
  }
}
