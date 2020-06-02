import login-component from './login-component.vue';

var auth = {
  login: function(id, pass) {
    window.alert('userid:' + id + '\n' + 'password:' + pass);
  }
}

Vue.component('user-login', {
  template: 
})
