<script>
export default {
    name: 'Post',
    props:{
        post: Object
    }
}
</script>
<template>
    <div>
        <h3 ><span class="green">Nome: </span>{{post.nome}}</h3>
        <p><span class="green">Mensagem: </span>{{post.mensagem}}</p>
    </div>
</template>
<style scoped>
    div{
        border: 1px solid #00bd7e;
        margin-top: 5px;
        border-radius: 5px;
    }
</style>