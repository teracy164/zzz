<template>
  <div>
    <h1 style="margin-top: 2em">必要素材リスト</h1>

    <MaterialListCharacter />

    <div style="margin-top: 2em"></div>

    <MaterialListWeapon />
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss">
.material-list {
  font-size: 12px;
  line-height: 1.2em;
  display: flex;
  flex-wrap: wrap;
  > div {
    margin-right: 1em;
  }
  .sum {
    .material + .material {
      margin-left: 0.5em;
    }
  }
}
</style>
