<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{number}}</p>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        number: null
      }
    },
    created() {
      axios.get('http://localhost:3000/admin/add-product')
        .then(a => this.number = a);
    }
  }
</script>
