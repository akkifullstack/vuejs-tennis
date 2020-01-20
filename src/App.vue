<template>
  <v-app>
    <Home />
  </v-app>
</template>

<script>
import Home from './components/Home/Home';

export default {
  name: 'App',

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
