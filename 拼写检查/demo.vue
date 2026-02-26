<template>
  <div></div>
</template>
<script lang="ts" setup>
import Typo from "typo-js";
import { onMounted } from "vue";

const str =
  "The sun rose slowly over the rolling hills, painting the sky in soft hues of pink and gold. Birds chirped from the branches of ancient oaks, while a gentle breeze rustled through the tall grass.";

/**
 * 检查一段文本中的拼写错误
 * @param {string} text - 要检查的英文文本
 * @returns {Array<{word: string, isCorrect: boolean}>} 错误单词列表
 */
function checkSpelling(text: string) {
  // 清理标点，只保留字母和空格
  const words = text
    .replace(/[^\w\s]/g, "") // 去除标点
    .split(/\s+/) // 按空格分割
    .filter(Boolean); // 去除空字符串

  const dictionary = new Typo("en_US", null, null, {
    dictionaryPath: "/typo/dictionaries",
  });

  return words.map((word) => {
    const lowerWord = word.toLowerCase();
    const isCorrect = dictionary.check(lowerWord);
    return { word, isCorrect };
  });
}

onMounted(() => {
  console.log(checkSpelling(str));
});
</script>
<style lang="less" scoped></style>
