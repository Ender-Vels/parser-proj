<template>
  <div>
    <h2>Settings</h2>
    <form @submit.prevent="saveSettings">
      <div class="mb-3">
        <label for="apiKey" class="form-label">API Key</label>
        <input type="text" id="apiKey" v-model="apiKey" class="form-control">
      </div>
      <div class="mb-3">
        <label for="apiSecret" class="form-label">API Secret</label>
        <input type="text" id="apiSecret" v-model="apiSecret" class="form-control">
      </div>
      <div class="mb-3">
        <label for="leverage" class="form-label">Leverage</label>
        <input type="number" id="leverage" v-model.number="leverage" class="form-control">
      </div>
      <div class="mb-3">
        <label for="portfolioSize" class="form-label">Enter the size of your portfolio</label>
        <input type="number" id="portfolioSize" v-model.number="portfolioSize" class="form-control">
      </div>
      <div class="mb-3">
        <label for="traderPortfolioSize" class="form-label">Enter the size of Trader portfolio</label>
        <input type="number" id="traderPortfolioSize" v-model.number="traderPortfolioSize" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Save Settings</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiKey: '',
      apiSecret: '',
      leverage: 1,
      portfolioSize: 0,
      traderPortfolioSize: 0
    }
  },
  methods: {
    saveSettings() {
      const settings = {
        apiKey: this.apiKey,
        apiSecret: this.apiSecret,
        leverage: this.leverage,
        portfolioSize: this.portfolioSize,
        traderPortfolioSize: this.traderPortfolioSize
      }
      localStorage.setItem('settings', JSON.stringify(settings))
      alert('Settings saved')
    }
  },
  mounted() {
    const savedSettings = JSON.parse(localStorage.getItem('settings'))
    if (savedSettings) {
      this.apiKey = savedSettings.apiKey
      this.apiSecret = savedSettings.apiSecret
      this.leverage = savedSettings.leverage
      this.portfolioSize = savedSettings.portfolioSize
      this.traderPortfolioSize = savedSettings.traderPortfolioSize
    }
  }
}
</script>

<style scoped>
.mt-3 {
  margin-top: 1rem;
}
</style>
