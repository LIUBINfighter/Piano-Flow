<template>
  <div class="midi-uploader">
    <input 
      type="file" 
      ref="fileInput"
      accept=".mid,.midi"
      @change="handleFileUpload"
      style="display:none"
    >
    <!-- <div class="upload-area" @click="triggerFileInput">
      <i class="icon-upload"></i>
      <p>点击或拖拽MIDI文件到此处</p>
    </div>
  </div> -->
</template>

<script>
import { parseMidi } from '../utils/midiParser'
import { bus } from '../services'

export default {
  name: 'MidiUploader',
  
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click()
    },

    async handleFileUpload(event) {
      const file = event.target.files[0]
      if(!file) return
      
      try {
        const reader = new FileReader()
        reader.onload = async (e) => {
          const midiData = await parseMidi(e.target.result)
          
          // 发送解析后的MIDI数据到游戏系统
          bus.$emit('load-midi', {
            title: file.name.replace(/\.[^/.]+$/, ""),
            midi: midiData,
            isCustom: true
          })
          
          this.$router.push({name: 'piece'})
        }
        reader.readAsArrayBuffer(file)
      } catch(err) {
        console.error('MIDI解析失败:', err)
        // 显示错误提示
        bus.$emit('toast', {
          type: 'error',
          message: '无法解析MIDI文件,请确保文件格式正确'
        })
      }
    }
  }
}
</script>

<style lang="stylus">
.midi-uploader
  .upload-area
    border: 2px dashed #ccc
    padding: 20px
    text-align: center
    cursor: pointer
    
    &:hover
      border-color: #666
      
    .icon-upload
      font-size: 32px
      margin-bottom: 10px
</style> 