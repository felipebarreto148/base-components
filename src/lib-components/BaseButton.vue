<template>
  <button :style="styleSheet" @click="$emit('clicked')">
    <slot v-if="!loading"/>
    <mdicon v-else name="loading" spin />
  </button>
</template>

<script lang="ts">
import Vue from "vue";
import { BaseButtonProps } from "@/types/base-button"

export default Vue.extend({
  props: {
    background: {
      type: String,
      default: () => "orange"
    },
    color: {
      type: String,
      default: () => "black"
    },
    loading: {
      type: Boolean,
      required: false,
      default: () => false
    }
  },
  computed: {
    styleSheet(): BaseButtonProps{
      return {
        background: this.background,
        color: this.color,
      }
    }
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@500&display=swap');
button {
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 8px;
  transition: ease-in 200ms;
  font: 500 18px 'Fira Code', monospace;
  cursor: pointer;
}

button:hover {
  transform: scale3d(1.1, 1.1, 1.1);
}
</style>