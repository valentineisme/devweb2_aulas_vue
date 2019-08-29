<template>
    <v-container grid-list-md>
        <v-layout row wrap align-center justify-center fill-height>
            <v-flex xs12 sm8 lg4 md5>
                <v-card>
                    <v-card-title>
                        <span>
                            Autenticação
                        </span>
                    </v-card-title>
                    <v-spacer></v-spacer>
                    <v-card-text>
                        <v-form ref='form'>
                            <v-container>
                                <v-text-field
                                    :counter="70"
                                    label="usuario"
                                    maxlength="70"
                                    required
                                />

                                <v-text-field
                                    :type:"password"
                                    :counter="20"
                                    label="senha"
                                    maxlength="20"
                                    required
                                />
                            </v-container>
                            <v-btn class='green'>Login</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default{
        name: 'Login',
    }
</script>