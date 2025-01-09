<template>
  <div class="card">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.card {
  border: 1px solid lightgray;
  border-radius: 5px;
  box-shadow: 1px 1px 3px lightgray;
  padding: 1em;
}
</style>
