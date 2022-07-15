<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ServeDev",
});
</script>

<template>
  <div id="app">
    <main class="content">
      <base-button>
        Bem vindo
        <template v-slot:prepend>
          <mdicon name="chevron-right" />
        </template>
      </base-button>
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body,
#app {
  width: 100vw;
  height: 100vh;
}

.content {
  width: 100%;
  height: 100%;
  background: lightblue;
  padding: 20px;
}
</style>