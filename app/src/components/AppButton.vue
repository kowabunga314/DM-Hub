<template>
  <div v-bind:class="classObject" >
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'AppButton',
  emits: [ 'appButtonClicked' ],
  props: {
    text: {
      type: String,
      required: true
    },
    buttonType: {
      type: String,
      default: 'secondary'
    }
  },
  computed: {
    primary () { return this.buttonType === 'primary' },
    secondary () { return this.buttonType === 'secondary' },
    ternary () { return this.buttonType === 'ternary' },
    classObject () {
      return {
        appButton: true,
        primary: this.primary,
        secondary: this.secondary,
        ternary: this.ternary
      }
    },
    methods: {
      appButtonClicked (event) {
        console.log('event:', event)
        // this.$emit('appButtonClick')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.appButton {
  width: 100px;
  margin-left: 5px;
  margin-right: 5px;
  font-style: bold;
  border: 2px solid #2c3e50;
  border-radius: 9999px;
  cursor: pointer;
  overflow: auto;
}

.primary {
  color: white;
  background-color: #42b983;
}

.secondary {
  color: #2c3e50;
  background-color: white;
}
</style>