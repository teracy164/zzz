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
      <div class="menu-item">
        <NuxtLink to="/news">ニュース</NuxtLink>
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
