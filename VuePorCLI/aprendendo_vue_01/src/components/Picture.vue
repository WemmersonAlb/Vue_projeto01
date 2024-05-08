<script>
export default {
    name: 'Picture',
    data(){
        return{
            avatar: "/Img/minion.jpeg",
            descricao: "Testando o alt"
        }
    }
}
</script>

<template>
    <div>
        <img :src="avatar" :alt="descricao"/>
    </div>
</template>
<style>
    img{
        width: 100px;
        margin-top: 10px;
    }
</style>