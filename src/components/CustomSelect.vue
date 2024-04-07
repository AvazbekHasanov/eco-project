<template>
  <div class="custom-select" v-bind:style="{'width': `100%`, 'height': `${height}px`}">
    <input @input="handleInput" v-model="inputValue.name" @focus="showOptions" :class="[{'is-options-open': focused}, {'empty-placeholder': !placeholder}, 'select-input']" type="text">
    <span v-if="placeholder" :class="[{'is-focus': inputValue}, 'placeholder']">{{ placeholder }}</span>
    <transition name="fade" mode="in-out">
      <div v-show="focused" class="options">
        <div v-for="(option, i) in filteredOptions" :key="i" @click="selectOption(option)" :class="[{'is-searched': option.searched}, 'select-item']">{{ option.name }}</div>
      </div>
    </transition>
  </div>
</template>

<script>
import {th} from "vuetify/locale";

export default {
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    curValue:{
      type: [String, Number],
      default: ''
    },
    dataArray: {
      type: Array,
      default: []
    },
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 60
    },
    placeholder: {
      type: String,
      default: 'Choose an option'
    }
  },
  data() {
    return {
      inputValue: {},
      focused: false,
      searched: false
    }
  },
  computed: {
    filteredOptions() {
      let result = [];
      this.dataArray.forEach((item, i) => {
        item.searched = false;
        let lowerValue = this.inputValue.name;
        if (this.inputValue.name) {
          lowerValue = this.inputValue.name.toLowerCase();
        }
        if (item.name.toLowerCase().includes(lowerValue)) {
          if (this.searched && this.inputValue.name.trim() !== "") {
            item.searched = true;
          }
          result.unshift(item);
        } else {
          item.searched = false;
          result.push(item);
        }
      });
      if (this.inputValue.name) {
        return result;
      }
      return result.reverse();
    }
  },
  watch: {
    dataArray(newVal, oldVal) {
      this.setCurrent();
    },
    curValue(newVal, oldVal) {
      this.setCurrent();
    }
  },
  methods: {
    handleInput(e) {
      this.searched = true;
      this.$emit('select-changed', this.inputValue);
    },
    showOptions() {
      this.inputValue = {};
      this.focused = true;
    },
    hideOptions() {
      this.searched = false;
      this.$nextTick(() => {
        this.focused = false;
      });
    },
    selectOption(option) {
      delete option.searched;
      this.inputValue = option;
      this.$emit('select-changed', this.inputValue);
      this.hideOptions();
    },
    outsideClick(e) {
      if (!this.$el.contains(e.target)) {
        this.hideOptions();
      }
    },
    setCurrent(){
      console.log("this.curValue",this.curValue, "dataArray", this.dataArray)
      this.dataArray.forEach((el, index)=>{
        if(el.id == this.curValue){
          this.selectOption(el);
          console.log(el)
        }
      })
    },
  },
  mounted() {
    this.setCurrent();
    document.documentElement.addEventListener('click', this.outsideClick, false);
    if (this.placeholder.trim() === "") {
      this.placeholder = false;
    }
  },
  beforeDestroy() {
    document.documentElement.removeEventListener('click', this.outsideClick, false);
  }
};
</script>

<style scoped>
.custom-select {
  position: relative;
  display: flex;
  align-items: center;
}

.select-input {
  border: 1px solid rgba(0,0,0,.2);
  outline: none;
  padding: 20px 15px 4px;
  border-radius: 4px;
  transition: all .3s ease;
  z-index: 5;
  width: 100%;
  height: 100%;
}

.select-input.empty-placeholder {
  padding: 5px 15px;
}

.select-input:focus, .select-input:valid {
  outline: 0;
}

.select-input:focus {
  border-color: #a4d8c2;
}

.select-input:focus + .placeholder {
  top: 8px;
  font-size: 12px;
  margin-top: 0;
}

.select-input.is-options-open {
  border-radius: 4px 4px 0 0;
  border-bottom-color: rgba(0,0,0,.2);
}

.placeholder {
  position: absolute;
  left: 15px;
  font-size: 14px;
  color: #9299a2;
  top: 50%;
  color: rgba(51,51,51,.54);
  pointer-events: none;
  transition: all .3s ease;
  margin-top: -12px;
  z-index: 6;
  background: transparent;
}

.placeholder.is-focus {
  top: 8px;
  font-size: 12px;
  margin-top: 0;
}

.options {
  width: 100%;
  position: absolute;
  top: 97%;
  background: #fff;
  border: 1px solid rgba(0,0,0,.2);
  border-radius: 0 0 4px 4px;
  max-height: 50vh;
  overflow: auto;
  transition: all .3s ease;
  z-index: 4;
}

.select-item {
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  transition: all .3s ease;
  padding: 0 15px;
}

.select-item.is-searched, .select-item:hover {
  background: #f4fbf8;
}

.fade-enter-active,
.fade-leave-active {
  transition: all .4s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
  will-change: opacity;
  transform: translateY(-30px);
}

</style>