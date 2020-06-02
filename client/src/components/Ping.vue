<template>
  <div>
    Yes!!!
    <p>{{ msg }}</p>
    No!!!
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Ping',
  data() {
    return {
      msg: 'Hello! from Ping.vue.',
    };
  },
  methods: {
    getMessage() {
      const path = 'http://127.0.0.1:5000/';
      axios.get(path)
        .then((res) => {
          this.msg = res.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  created() {
    this.getMessage();
  },
};
</script>
