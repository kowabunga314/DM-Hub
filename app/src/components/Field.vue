<template>
  <div class="field-container">
    <label>{{ fieldSchema.title }}: </label>
    <input
      :id="fieldSchema.name"
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
  methods: {
    handleUpdate(event) {
      console.log('event:', event)
    }
  }
}
</script>

<style lang="scss" scoped>
.field-container {
  padding: 5px;
}
</style>