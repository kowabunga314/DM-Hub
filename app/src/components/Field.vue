<template>
  <div>
    <!-- {{ fieldSchema.title }} -->
    <label for="">{{ fieldSchema.title }}</label>
    <input 
      :type="fieldSchema.type"
      :value="fieldSchema.value"
      :checked="fieldSchema.checked"
      :placeholder="fieldSchema.placeholder"
      @change="handleUpdate" />
  </div>
</template>

<script>
export default {
  name: 'Field',
  props: [ 'fieldSchema' ],
  data () {
    return {

    }
  },
  methods: {
    handleUpdate(event) {
      console.log('event:', event)
    }
  },
  created () {
    console.log('field schema:', this.fieldSchema)
  }
}
</script>

<style lang="scss" scoped>

</style>