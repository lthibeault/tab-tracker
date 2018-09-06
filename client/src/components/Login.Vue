<template>
  <v-layout>
    <v-flex xs3 offset-xs3>
      <div class="white elevation-2">

        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2 ">
          <v-text-field name="email" label="email" v-model="email" class="input-group--focused"></v-text-field>

                <br />
                  <v-text-field
                    v-model="password"
                    :rules="[rules.required, rules.min]"
                    :type="password"
                    name="input-10-1"
                    label="Password"
                    hint="At least 8 characters"></v-text-field>
            <br />
            <div class="error" v-html="error"/>
              <br  />
                <v-btn class="cyan" dark @click="login">login</v-btn>
              </div>
                </div>
      </v-flex>
    </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      show1: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match')
      },

      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color: red;
}
</style>
