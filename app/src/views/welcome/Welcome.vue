<template>
  <div>
    <h1>Welcome!</h1>
    <!-- <Form :formSchema="signupSchema" />
    <div class="nav-buttons">
      <span class="button-condenser">
        <AppButton text="Log In" />
        <AppButton id="submit" text="GO!" />
      </span>
    </div> -->
    <Signup />
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
import appSchema from '@/api/app/schema.js'
import AppButton from '@/components/AppButton.vue'
import Signup from '@/views/welcome/components/Signup.vue'

export default {
  name: 'Welcome',
  components: { Form, appSchema, AppButton, Signup },
  computed: {
    signupSchema () {
      return appSchema.signupForm
    },
    loginSchema () {
      return appSchema.loginForm
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-buttons {
  display: flex;
}
.button-condenser {
  display: flex;
  margin-left: auto;
  margin-right: auto;
}
</style>