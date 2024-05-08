<script>
import Info from './Info.vue'

export default {
    name: 'Pessoa',
    components:{
        Info
    },
    data(){
        return{
            nome: 'Pessoa'
        }
    }
}
</script>
<template>
    <div>
        <h2>Este é o componente {{ nome }}</h2> 
        <Info />  
    </div>
</template>