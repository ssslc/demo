//
<script setup>
// import { ref, onMounted } from 'vue'

// function changeSelectBlock() {
//   console.log('changeSelectBlock')
// }
//
//
</script>

<script>
export default {
  name: 'comSelect',
  data() {
    return {
      isShowSelectBlock: false,
      inputValue: ''
    }
  },
  methods: {
    changeCloseSelectBlock() {
      this.isShowSelectBlock = false
      console.log(this.isShowSelectBlock, 'changeCloseSelectBlock')
    },
    changeOpenSelectBlock() {
      this.isShowSelectBlock = true
      console.log(this.isShowSelectBlock, 'changeOpenSelectBlock')
    },
    chooseItem(e, data) {
      console.log(2, data, e)
      this.inputValue = data
      this.isShowSelectBlock = false
    }
  }
}
</script>

<template>
  <div class="myinput">
    <input
      type=""
      class="input-ele"
      @blur="changeCloseSelectBlock"
      @focus="changeOpenSelectBlock"
      name=""
      :value="inputValue"
    />
    <Transition>
      <div class="selectItem" v-if="isShowSelectBlock">
        <ul class="select-ul">
          <li @mousedown="e => chooseItem(e, '第一个选项')">第一个选项</li>
          <li>第二个选项</li>
          <li>第三个选项</li>
        </ul>
      </div>
    </Transition>
  </div>
</template>
<style lang="less" scoped>
/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.myinput {
  width: 200px;
  display: inline-block;
  position: relative;
  .input-ele {
    display: inline-block;
    width: 100%;
  }
  .selectItem {
    position: absolute;
    width: 100%;
    border: 1px solid rgb(234, 243, 242);
    background-color: rgb(255, 255, 255);
    box-shadow: #000;
  }
  .select-ul li {
    list-style: none;
    &:hover {
      color: #1da57a;
      cursor: pointer;
    }
  }
}
</style>
