<template>
  <!--
    autofocus: 挂在后焦点立即聚焦在编辑器
    indentWithTab: 按住 tab 键时是否使用 tab 作为缩进
    tabSize: 2: 按住 tab 键时按下 2 个空格作为缩进
    disabled: 只读操作
   -->
  <div class="code-box">
    <div class="top-name">
      <div class="left-title">{{ props.codeType }}</div>
      <div class="copy-btn" @click="clickCopy">
        {{ copyName }}
        <img class="img-copy" src="../../assets/comm/copy.png" alt="">
      </div>
    </div>
    <codemirror
        v-model="code"
        placeholder="Code gose here..."
        :style="options.style"
        :mode="options.mode"
        :spellcheck="options.spellcheck"
        :autofocus="options.autofocus"
        :indent-with-tab="options.indentWithTab"
        :tabSize="options.tabSize"
        :extensions="options.extensions"
        :disabled="options.disabled"
        @ready="console.log('ready', $event)"
        @change="onCodeChange"
        @focus="console.log('focus', $event)"
        @blur="useEditedCode"
    />
  </div>
</template>

<script setup lang="ts">
import {Codemirror} from "vue-codemirror";
import {python} from "@codemirror/lang-python";
import {java} from "@codemirror/lang-java";
import {json} from "@codemirror/lang-json";
import {javascript} from "@codemirror/lang-javascript";
import {cpp} from "@codemirror/lang-cpp";
import {go} from "@codemirror/lang-go";
import {html} from "@codemirror/lang-html";
import {sql} from "@codemirror/lang-sql";
import {vue} from "@codemirror/lang-vue";
import {css} from "@codemirror/lang-css";
import prettier from 'prettier/standalone';
import parserHtml from 'prettier/parser-html';
import parserCss from 'prettier/parser-postcss';
import parserBabel from 'prettier/parser-babel';

import {oneDark} from "@codemirror/theme-one-dark";

const code = ref(``);
const copyName = ref("复制");
let selectValue = "cpp"

const props = defineProps({
  backType: {
    type: String,
    default: "dark",
  },
  codeType: {
    type: String,
    default: "javascript",
  },
  code: {
    type: String,
    default: "",
  }
})

const options = ref({
  style: {
    fontSize: "16px",
    lineHeight: 1.5,
    fontFamily: "Consolas, 'Courier New', monospace",
    backgroundColor: "white",
    padding: "10px 10px",
  },
  mode: "text/x-c++src",
  spellcheck: true,
  autofocus: false,
  indentWithTab: true,
  tabSize: 2,
  extensions: [cpp(), oneDark], //传递给CodeMirror EditorState。创建({扩展})
  disabled: true,
})

const onCodeChange = (newCode) => {
  console.log("====", newCode);
}


// 方法
// 失去焦点时,使用已编辑的代码
function useEditedCode() {
  console.log("@@@blur@@@code:", code.value);
  console.log("@@@blur@@@cpp:", cpp);
}

const clickCopy = () => {
  navigator.clipboard.writeText(props.code).then(() => {
    copyName.value = "已复制"
    setTimeout(() => {
      copyName.value = "复制"
    }, 2000)

  }).catch(() => {
    alert('代码复制失败。')
  })
}

onMounted(() => {
  options.value.extensions = props.backType === "dark" ? [oneDark] : []
  switch (props.codeType) {
    case "javascript":
      options.value.mode = "text/javascript";
      options.value.extensions.push(javascript())
      break;
    case "python":
      options.value.mode = "text/x-python";
      options.value.extensions.push(python())
      break;
    case "java":
      options.value.mode = "text/x-java";
      options.value.extensions.push(java())
      break;
    case "sql":
      options.value.mode = "text/x-sql";
      options.value.extensions.push(sql())
      break;
    case "json":
      options.value.mode = "text/x-json";
      options.value.extensions.push(json())
      break;
    case "html":
      options.value.mode = "text/x-html";
      options.value.extensions.push(html())
      break;
    case "go":
      options.value.mode = "text/x-go";
      options.value.extensions.push(go())
      break;
    case "vue":
      options.value.mode = "text/x-vue";
      options.value.extensions.push(vue())
      break;
    case "css":
      options.value.mode = "text/x-css";
      options.value.extensions.push(css())
      break;
    default:
      options.value.mode = "text/x-c++src";
      options.value.extensions.push(cpp())
      break;
  }
  code.value = props.code
})
</script>
<style scoped lang="scss">
.code-box {
  margin: 10px;
  //padding-bottom: 10px;
  border-radius: 5px;
  overflow: hidden;

  .top-name {
    display: flex;
    justify-content: space-between;
    height: 35px;
    background: #30313d;
    color: #ffffff;
    align-items: center;

    .left-title {
      margin-left: 10px;
      line-height: 35px;
      font-size: 17px;
      font-weight: bold;
    }

    .copy-btn {
      display: flex;
      align-items: center;
      margin-right: 10px;
      font-size: 14px;
      padding: 0 4px;

      .img-copy {
        width: 16px;
        height: 16px;
        cursor: pointer;
        margin: 0 5px;
      }

      &:hover {
        box-sizing: border-box;
        padding: 0 4px;
        background: #2CD5FF;
        border-radius: 5px;
        height: 25px;
      }
    }
  }
}
</style>
