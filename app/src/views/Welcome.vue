<template>
  <div>
    <h1>Welcome</h1>
    <div>
      <Form :formSchema="signupSchema" />
    </div>
    <div>Navigation Buttons</div>
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
import appSchema from '@/api/app/schema.js'
export default {
  name: 'Welcome',
  components: { Form, appSchema },
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

</style>