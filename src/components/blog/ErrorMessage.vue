<template>
    <div class="container">
      <img src="https://i.imgur.com/qIufhof.png" />

      <h1>
        <span>Error!!</span> <br />
        Something has gone wrong
      </h1>
      <p>{{ $props.message }}</p>
      
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        message: {
            type: String,
            required: true
        }
    },

})
</script>
<style lang="scss"> 

.container {
  text-align: center;
  margin: auto;
  padding: 4em;
  img {
    width: 256px;
    height: 225px;
  }

  h1 {
    margin-top: 1rem;
    font-size: 35px;
    text-align: center;

    span {
      font-size: 60px;
    }
  }
  p {
    margin-top: 1rem;
  }

  p.info {
    margin-top: 4em;
    font-size: 12px;

    a {
      text-decoration: none;
      color: rgb(84, 84, 206);
    }
  }
}

</style>