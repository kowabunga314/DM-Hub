<template>
  <div class="form-container">
    <h2>{{ formSchema.title }}</h2>
    <div v-for="field in formSchema.properties" :key="field.name">
      <Field :fieldSchema="field" />
    </div>
  </div>
</template>

<script>
import Field from '@/components/Field.vue'

export default {
  name: 'Form',
  components: { Field },
  props: [ 'formSchema' ]
}
</script>

<style lang="scss" scoped>
.form-container {
  padding-bottom: 20px;
}
h2 {
  margin-bottom: 40px;
}
</style>