<script>
    export default {
        name: 'LifeCycle',
        data(){
            return {
                nome: 'ainda não sei'
            }
        },
        created() {
            setTimeout(()=>{
                this.nome = 'Pedro'
            }, 1000);
        },
        mounted() {
            setTimeout(()=>{
                this.nome = 'João'
            }, 2000);
        },
    }
</script>

<template>
    <div>
        <h1>Meu nome é {{ nome }}</h1>
    </div>
</template>