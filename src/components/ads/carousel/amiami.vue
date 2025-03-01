<template>
  <AdsCarousel :items="items" />
</template>
<script lang="ts" setup>
const adAmiami = `
<a href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZ76+NA2+66H9D" rel="nofollow">
  <img border="0" width="300" height="250" alt="" src="https://www20.a8.net/svt/bgt?aid=250118024166&amp;wid=001&amp;eno=01&amp;mid=s00000003017001038000&amp;mc=1">
</a>
<img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=44WWAW+2QTZ76+NA2+66H9D" alt="">
 `;

// かりんフィギュア
const adFigureCorin = `
<a href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZ76+NA2+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-183217%26a8%3DJgHMsgTYwGp2_fpLukS8lKotNZesmYHBUYpEyHPBzFnStNPGyGvESNnLu8zNodHJzguKwNvDMmQrxs00000003017001%26_gl%3D1%252ay2mna5%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTc0MDgwMTMzMi4xMDAuMS4xNzQwODAxMzM4LjAuMC4w" rel="nofollow">
<img border="0" alt="" src="https://img.amiami.jp/images/product/main/251/FIGURE-183217.jpg"></a>
<img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=44WWAW+2QTZ76+NA2+BWGDT" alt="">
`;

// エレンフィギュア
const ad1 = `
<a data-v-eefee94e="" href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZ76+NA2+BWGDT&amp;a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-181127%26a8%3Dh3s4_3t.TAFUt-mqtoNvU-qV2A5_R.s97.1aMUq.JaFmlANz2zsONRFOHvJAOCshJ3YWTAwi4RLQxs00000003017001%26_gl%3D1%252aaw8atc%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczNzc4ODM3Ny4zNS4xLjE3Mzc3ODg0MjUuMC4wLjA." rel="nofollow"><img data-v-eefee94e="" border="0" alt="" src="https://img.amiami.jp/images/product/main/251/FIGURE-181127.jpg"></a><img data-v-eefee94e="" border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=44WWAW+2QTZ76+NA2+BWGDT" alt="">
`;

// リンフィギュア
const ad2 = `
<a data-v-eefee94e="" href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZ76+NA2+BWGDT&amp;a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-181324%26page%3Drt_02%26a8%3Dh3s4_3t.TAFUt-mqtoNvU-qV2A5_R.s97.1aMUq.JaFmlANz2zsONRFOHvJAOCshJ3YWTAwi4RLQxs00000003017001" rel="nofollow"><img data-v-eefee94e="" border="0" alt="" src="https://img.amiami.jp/images/product/main/251/FIGURE-181324.jpg"></a><img data-v-eefee94e="" border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=44WWAW+2QTZ76+NA2+BWGDT" alt="">`;
// アキラフィギュア
const ad3 = `
<a data-v-bbaf38bc="" href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZ76+NA2+BWGDT&amp;a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-181325%26a8%3Dh3s4_3t.TAFUt-mqtoNvU-qV2A5_R.s97.1aMUq.JaFmlANz2zsONRFOHvJAOCshJ3YWTAwi4RLQxs00000003017001%26_gl%3D1%252a1hucue4%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczNzM2MDExNC4yMC4xLjE3MzczNjAzNzYuMC4wLjA." rel="nofollow"><img data-v-bbaf38bc="" border="0" alt="" src="https://img.amiami.jp/images/product/main/251/FIGURE-181325.jpg"></a><img data-v-bbaf38bc="" border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=44WWAW+2QTZ76+NA2+BWGDT" alt="">`;
// 猫又フィギュア
const ad4 = `
<a href="https://px.a8.net/svt/ejp?a8mat=44WWAW+2QTZ76+NA2+BWGDT&a8ejpredirect=https%3A%2F%2Fwww.amiami.jp%2Ftop%2Fdetail%2Fdetail%3Fgcode%3DFIGURE-179736%26a8%3Dh3s4_3t.TAFUt-mqtoNvU-qV2A5_R.s97.1aMUq.JaFmlANz2zsONRFOHvJAOCshJ3YWTAwi4RLQxs00000003017001%26_gl%3D1%252agprxpu%252a_ga%252aMTMwNDM0MDIyNy4xNzMwMzc4MDQx%252a_ga_DNC11S3TQ3%252aMTczNzg2NDUyNC4zOS4xLjE3Mzc4NjY3MjkuMC4wLjA." rel="nofollow">
<img border="0" alt="" src="https://img.amiami.jp/images/product/main/244/FIGURE-179736.jpg"></a>
<img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=44WWAW+2QTZ76+NA2+BWGDT" alt="">
`;

const items = [adAmiami, adFigureCorin, ad1, ad2, ad3, ad4];
</script>
