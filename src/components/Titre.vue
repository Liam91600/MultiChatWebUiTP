<template>
    <div class="titre">
      <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
  name: 'TitrePage',
  props: {
    msg: String
  }
}
</script>