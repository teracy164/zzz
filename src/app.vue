<template>
  <div class="flex flex-col h-full">
    <Header style="height: 3em; min-height: 3em; max-height: 3em" class="no-print" />
    <main class="grow overflow-auto p-3">
      <NuxtPage />
    </main>
    <div class="no-print text-center my-2 px-2 flex flex-wrap justify-between" style="font-size: 0.7rem">
      <div>Created by teracy</div>
      <el-link type="primary" size="small" href="https://x.com/teracy164" target="_blank"> 問い合わせはX（旧Twitter）まで </el-link>
    </div>
    <!-- admax -->
    <div id="admax-ad-container"></div>
    <!-- admax -->
  </div>
</template>
<script lang="ts" setup>
const description = [
  'ゼンレスゾーンゼロ用のツールです。',
  'ビルドカードの作成ができ、スコア計算にも対応しています。',
  'また、キャラ・武器を育成するための素材の数を確認することできます。',
  'zenless zone zero build card and calculate score.',
  'materials list. and materials calculator',
].join('\n');

useSeoMeta({
  title: 'ZZZ Tools | ゼンレスゾーンゼロツール',
  ogTitle: 'ZZZ Tools | ゼンレスゾーンゼロツール',
  description,
  ogDescription: description,
});
onMounted(() => {
  const iframe = document.createElement('iframe');
  document.getElementById('admax-ad-container').appendChild(iframe);

  const html = '<body><script src="https://adm.shinobi.jp/s/518c8ffee39c2c2a3a4c44d04fbeb9f6"><\/script><\/body>';
  const iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(html);
  iframeDocument.close();

  // const elScript = document.createElement('script');
  // elScript.type = 'text/javascript';
  // elScript.src = 'https://adm.shinobi.jp/s/518c8ffee39c2c2a3a4c44d04fbeb9f6';
  // elScript.async = true;

  // elScript.onload = () => {
  //   (globalThis.admaxads = (window as any).admaxads || []).push({ admax_id: '518c8ffee39c2c2a3a4c44d04fbeb9f6', type: 'action' });
  //   console.log(globalThis.admaxads);
  // };
  // elScript.onerror = () => {
  //   console.error('failed load ad js.');
  // };

  // document.getElementById('admax-ad-container').appendChild(elScript);
});
</script>
