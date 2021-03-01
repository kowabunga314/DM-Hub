<template>
  <div>
    <Form :formSchema="loginSchema" />
    <div class="nav-buttons">
      <span class="button-condenser">
        <AppButton text="Sign Up" />
        <AppButton id="submit" text="GO!" buttonType="primary" />
      </span>
    </div>
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
import appSchema from '@/api/app/schema.js'
import AppButton from '@/components/AppButton.vue'

export default {
  name: 'Signup',
  components: { Form, appSchema, AppButton },
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