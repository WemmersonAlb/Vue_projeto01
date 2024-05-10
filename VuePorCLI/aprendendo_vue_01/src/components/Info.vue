<script>
import Picture from './Picture.vue';
export default {
    name: 'Info',
    components:{
        Picture
    },
    data(){
        return{
            esta_trabalhando: true,
            teste:false,
            status:'',
            classStatus:'',
            meu_link: 'https://github.com/wemmersonalb'

        }
    },
    created(){
        if(this.teste){
            this.status = 'Operante'
            this.classStatus = 'green'
        }else{
            this.status = 'Inoperante'
            this.classStatus = 'red'
        }
    }
}
</script>
<template>
    <div>
        <p :class="classStatus">{{status}}</p>
        <p>Linguagens de programação que sei utilizar:</p>
        <ul>
            <li>Java</li>
            <li>C</li>
            <li>C#</li>
            <li>Javascript</li>
            <li>Python</li>
        </ul>
        <p>Meu github é <a v-bind:href="meu_link">este aqui.</a></p>
        <Picture />
    </div>
</template>
<style>
    .red{
        color: red;
    }
    .blue{
        color: blue;
    }
</style>