# Design Concepts Behind UFS

## State should be injectable.

By default, UFS' state lives in the upper-most UFS component. Generally, this
component wraps a native view, like `div` (on the web) or `View` (on React
Native). The child view is an implementation detail that largely doesn't concern
this library.

However, while state lives in the root component by default, it is also
injectable upon mount, using the `context` prop.

## Binding Native Views

Native Inputs are often implemented as [Controlled
Components](https://reactjs.org/docs/forms.html) that are wrapped by a native
`Field` component. This is clearly [illustrated in
`ufs-dom`](packages/ufs-dom/src/FormField.js).
