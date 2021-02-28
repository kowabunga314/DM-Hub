

const signupForm = {
  name: 'signup_form',
  title: 'Signup Form',
  type: 'group',
  properties: [
    {
      name: 'email',
      title: 'Email',
      type: 'text',
      placeholder: 'name@domain.com',
      required: true,
      default: null,
      value: null,
      checked: false,
      meta: {},
      properties: []
    },
    {
      name: 'username',
      title: 'Username',
      type: 'text',
      placeholder: 'coolname',
      required: true,
      default: null,
      value: null,
      checked: false,
      meta: {},
      properties: []
    },
    {
      name: 'password',
      title: 'Password',
      type: 'password',
      placeholder: 'password',
      required: true,
      default: null,
      value: null,
      checked: false,
      meta: {},
      properties: []
    }
  ]
}

const loginForm = {
  name: 'login_form',
  title: 'Login Form',
  type: 'group',
  properties: [
    {
      name: 'username',
      title: 'Username',
      type: 'text',
      placeholder: 'coolname',
      required: true,
      default: null,
      value: null,
      checked: false,
      meta: {},
      properties: []
    },
    {
      name: 'password',
      title: 'Password',
      type: 'password',
      placeholder: 'password',
      required: true,
      default: null,
      value: null,
      checked: false,
      meta: {},
      properties: []
    }
  ]
}

export default { signupForm, loginForm }
