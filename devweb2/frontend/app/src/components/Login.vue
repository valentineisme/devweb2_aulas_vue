<template>
   <v-container grid-list-md>
     <v-layout row wrap align-center justify-center fill-height>
       <v-flex xs12 sm8 lg4 md5>
         <v-card>
           <v-card-title>
             <span>Autenticação</span>
           </v-card-title>
           <v-spacer/>
           <v-card-text>
             <v-form ref="form" v-model="valid" lazy-validation>
               <v-container>
                 <v-text-field
                   v-model="credentials.username"
                   :counter="70"
                   label="email address"
                   :rules="rules.username"
                   maxlength="70"
                   required
                 />

                 <v-text-field
                   type="password"
                   v-model="credentials.password"
                   :counter="20"
                   label="password"
                   :rules="rules.password"
                   maxlength="20"
                   required
                 />

               </v-container>
               <v-btn class="green" @click="login">Login</v-btn>
             </v-form>
           </v-card-text>
         </v-card>
       </v-flex>
     </v-layout>
   </v-container>
</template>

<script>

import axios from 'axios'
import router from '../router'


export default {
 name: 'Auth',
 data: () => ({
  credentials: {},
  rules : {
   username: [
    v => !!v || "Usuário é obrigatório."
   ],
   password: [
    v => !!v || "Senha é obrigatória",
    v => (v && v.length > 5) || "A senha deve ter pelo menos 5 caracteres"
   ]
  }
 }),
 methods: {
  login() {
   if (this.$refs.form.validate()) {
    axios.post(
     'http://localhost:8000/auth/token/login/',
     this.credentials
    ).then(res => {
      this.$session.start();
      this.$session.set('token', res.data.auth_token);
      router.push('/');
    }).catch(e => {
      alert('Usuário ou senha inválidos')
    })
   }
  }
 }
}
</script>
