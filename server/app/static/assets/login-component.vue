<template>
  <div id="login-template">
    <div>
      <input type="text" placeholder="Login ID" v-model="userid">
    </div>
    <div>
      <input type="password" placeholder="Password" v-model="password">
    </div>
    <button @click="login">Login</button>
  </div>
</template>
