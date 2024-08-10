<template>
  <div class="header" style="height: 3em">
    <div class="flex items-center">
      <div class="logo font-bold text-lg" @click="navigateTo('/')">ZZZ<span class="hidden md:inline"> Tools</span></div>
      <div class="menu-item">
        <NuxtLink to="/build">ビルド<span class="hidden md:inline">カード</span></NuxtLink>
      </div>
      <div class="menu-item">
        <NuxtLink to="/materials">育成<span class="hidden md:inline">計算機</span></NuxtLink>
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
    background-color: #333;
  }
  .menu-item {
    margin: 0 0.5em;
    padding: 0 0.5em;
    border-radius: 5px;
    a {
      text-decoration: none;
      color: white;
    }
  }
  .menu-item:hover {
    background-color: #333;
  }
}
</style>
