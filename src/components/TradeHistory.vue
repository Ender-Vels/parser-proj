<template>
  <div>
    <h2>Trade History</h2>
    <div class="mb-3">
      <input v-model="portfolioLink" placeholder="Enter portfolio link" class="form-control">
      <button @click="startParsing" class="btn btn-primary mt-3">Start Parsing</button>
      <button @click="stopParsing" class="btn btn-secondary mt-3">Stop Parsing</button>
      <button @click="downloadLog" class="btn btn-success mt-3">Download Log</button>
    </div>
    <ul class="list-group">
      <li v-for="(log, index) in logs" :key="index" class="list-group-item">
        {{ log }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      portfolioLink: '',
      logs: [],
      intervalId: null,
      settings: {}
    }
  },
  methods: {
    startParsing() {
      if (!this.portfolioLink) {
        alert('Please enter a portfolio link.')
        return
      }

      this.intervalId = setInterval(() => {
        // Симуляція парсингу - у реальній програмі замінити на код парсингу
        const newLog = `Parsed data at ${new Date().toLocaleTimeString()}`
        this.logs.push(newLog)
      }, 2000)
    },
    stopParsing() {
      clearInterval(this.intervalId)
      this.intervalId = null
    },
    downloadLog() {
      const dataStr = JSON.stringify(this.logs, null, 2)
      const blob = new Blob([dataStr], {type: 'application/json'})
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'trade_history_log.json'
      a.click()
      URL.revokeObjectURL(url)

      this.logs = []
    }
  },
  mounted() {
    const savedSettings = JSON.parse(localStorage.getItem('settings'))
    if (savedSettings) {
      this.settings = savedSettings
    }
  }
}
</script>

<style scoped>
.mt-3 {
  margin-top: 1rem;
}
</style>
