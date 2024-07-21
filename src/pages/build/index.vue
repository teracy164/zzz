<template>
  <div>
    <div style="margin-bottom: 1em">
      <el-button type="primary" @click="dialogInput.visible = true"
        >input data</el-button
      >
    </div>
    <el-dialog v-model="dialogInput.visible">
      <p>公式の戦績ツールからデータを取得して、以下に貼り付けてください</p>
      <el-tooltip trigger="click">
        <el-button> データの取得方法（How to get data）??? </el-button>
        <template #content>
          <div style="max-height: 50vh; overflow: auto">
            公式の戦績ツール（<a :href="officialTool" target="_blank"
              >{{ officialTool }} </a
            >）で作業します
            <ul>
              <li>1. F12で開発者ツールを開き、画面をリロードします</li>
              <li>2. 「ネットワークタブ」に切り替えます</li>
              <li>
                3.
                キャラ情報を取得しているAPI(末尾がinfo?id_list[]=～)をクリック
              </li>
              <li>
                4. プレビュータブに切り替えて、「data」で右クリック⇒値をコピー
              </li>
            </ul>
            <img src="/assets/images/help/help.png" style="max-width: 95vw" />
          </div>
        </template>
      </el-tooltip>

      <div style="margin: 1em 0">
        <el-input type="textarea" v-model="json" :rows="5" />
        <div style="margin-top: 1em; display: flex; justify-content: flex-end">
          <el-button type="primary" @click="createBuildCard()">生成</el-button>
        </div>
      </div>
    </el-dialog>
    <AvatarCard v-if="avatar" :avatar="avatar" />
  </div>
</template>
<script lang="ts" setup>
import type { ZzzAvatar, ZzzData } from '@/types/zzz'

const json = ref<string>('')
const avatar = ref<ZzzAvatar>()

const dialogInput = reactive({
  visible: true,
})

const officialTool =
  'https://act.hoyolab.com/app/mihoyo-zzz-game-record/index.html'

const createBuildCard = () => {
  try {
    const parsed = JSON.parse(json.value) as ZzzData
    if (parsed.avatar_list?.length) {
      avatar.value = parsed.avatar_list[0]

      dialogInput.visible = false
    }
  } catch (err) {
    console.error(err)
    alert('invalid format')
  }
}
</script>
<style lang="scss" setup>
.input-model {
  position: fixed;
  width: 100vw;
  height: 100vh;
  padding: 1em;
  overflow: hidden;

  .input-model-wrapper {
    overflow: auto;
    background-color: black;
  }
}
</style>
