<script>
import Picture from './Picture.vue';
export default {
    name: 'Info',
    components:{
        Picture
    },
    data(){
        return{
            esta_trabalhando: false,
            meu_link: 'https://github.com/wemmersonalb'

        }
    }
}
</script>
<template>
    <div>
        <p v-show="esta_trabalhando">TRABALHANDO</p>
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