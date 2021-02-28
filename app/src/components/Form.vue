<template>
  <div>
    <h2>{{ formSchema.title }}</h2>
    <div v-for="field in formSchema.properties" :key="field.name">
      <Field :fieldSchema="field" />
      <!-- <span>{{field.title}}</span> -->
    </div>
  </div>
</template>

<script>
import Field from '@/components/Field.vue'

export default {
  name: 'Form',
  components: { Field },
  props: [ 'formSchema' ],
  created () {
    this.formSchema.properties.forEach(field => {
      console.log('field:', field)
    })
  }
}
</script>

<style lang="scss" scoped>

</style>