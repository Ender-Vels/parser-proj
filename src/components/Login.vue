<template>
  <div class="modal show d-block" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Login</h5>
        </div>
        <div class="modal-body">
          <form @submit.prevent="login">
            <div class="mb-3">
              <label for="username" class="form-label">Username</label>
              <input type="text" v-model="username" id="username" class="form-control">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input type="password" v-model="password" id="password" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary w-100">Login</button>
          </form>
          <p v-if="errorMessage" class="text-danger mt-3">{{ errorMessage }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
      isAuthenticated: localStorage.getItem('isAuthenticated') === 'true'
    }
  },
  methods: {
    login() {
      const validUsername = 'Admin'
      const validPassword = 'Binance2024'

      if (this.username === validUsername && this.password === validPassword) {
        localStorage.setItem('isAuthenticated', true)
        this.isAuthenticated = true
        this.$emit('login', true)
      } else {
        this.errorMessage = 'Invalid username or password'
      }
    }
  }
}
</script>

<style scoped>
.modal {
  background: rgba(0, 0, 0, 0.6);
}

.modal-content {
  animation: slide-in 0.5s ease;
}

@keyframes slide-in {
  from {
    transform: translateY(-50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
