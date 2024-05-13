<script>
    export default {
        name: 'MultiplosEventos',
        data(){
            return{
                txt_multiplo_evento: 'Sem eventos',
                txt1: 'Primeiro Evento',
                txt2: 'Segundo Evento'
            }
        },
        methods: {
            primeiroEvento(txt, e){
                this.txt_multiplo_evento = txt;
            },
            segundoEvento(txt, e){
                setTimeout(()=>this.txt_multiplo_evento = txt, 500);
            }
        }
        
    }
</script>
<template>
    <div>
        <button @click="primeiroEvento(txt1, e), segundoEvento(txt2, e)">Ativar Múltiplos Eventos</button>
        <p>{{ txt_multiplo_evento }}</p>
    </div>
</template>
<style scoped>
    div{
        margin: 100px;
    }
    button{
        padding: 5px;
    }
</style>