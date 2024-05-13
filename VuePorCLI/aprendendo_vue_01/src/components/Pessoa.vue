<script>
import Info from './Info.vue'

export default {
    name: 'Pessoa',
    components:{
        Info
    },
    data(){
        return{
            nome_usuario:'',
            email_usuario:'',
            user:{}
        }
    },
    methods: {
        readUserID(){
            //requisição ajax
            let usuario={nome:'francisco', idade:'30', email:'etc@a.com'};
            this.user = usuario
            this.nome_usuario = usuario.nome
            this.email_usuario = usuario.email
        }
    }
}
</script>
<template>
    <div>
        <Info :user="user" />
        <button @click="readUserID">Exibir props</button>
    </div>
</template>