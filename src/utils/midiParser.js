export async function parseMidi(arrayBuffer) {
  // 使用现有的MIDI.js解析器
  return new Promise((resolve, reject) => {
    try {
      const midiFile = new window.MIDI.File(arrayBuffer)
      const midiData = midiFile.parseMidi()
      resolve(midiData)
    } catch (err) {
      reject(err)
    }
  })
}