<template>
  <v-dialog v-model="dialog" max-width="1000px">
    <Registration v-if="type == 'registration'" />
    <SignIn v-else />
  </v-dialog>
</template>

<script>
import Registration from "./SignUp";
import SignIn from "./SignIn";
export default {
  name: "Modal",
  props: {
    dialog: Boolean,
    type: String
  },
  components: {
    Registration,
    SignIn
  }
};
</script>
