<template>
  <div class="header" style="height: 3em">
    <div style="display: flex">
      <div class="logo" @click="navigateTo('/')">ZZZ Tools</div>
      <div class="menu-item">
        <NuxtLink to="/materials">素材</NuxtLink>
      </div>
    </div>
    <div style="text-align: right; font-size: 0.7em">
      <span style="font-size: 0.8em">スコア計算用Chrome拡張もあります</span>
      <div>
        <a
          href="https://chromewebstore.google.com/detail/zzz-score-calculator/ibbbkbnhocldehlkbemmlgkmdlbckjmn?authuser=0&hl=ja"
          target="_blank"
          class="text-blue-500"
        >
          ZZZ Score Calculator
        </a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header {
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 0 5px white;
  padding: -0 1em;

  .logo {
    padding: 0 0.5em;
    border-radius: 5px;
    cursor: pointer;
  }
  .logo:hover {
    background-color: #999;
  }
  .menu-item {
    margin: 0 0.5em;
    a {
      text-decoration: none;
      color: white;
    }
  }
}
</style>
