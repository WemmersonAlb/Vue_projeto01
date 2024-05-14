<script>
import Post from './Post.vue'

export default {
    name: 'Formulario',
    data(){
        return {
            nome:'',
            mensagem: '',
            lista_posts: [],
            qtd_posts: 0
            
        }
    },
    components:{
        Post
    },
    methods:{
        enviarFormulario(e){
            e.preventDefault();
            let post = {nome: this.nome, mensagem: this.mensagem};
            this.qtd_posts++;
            this.lista_posts.push(post);
            this.nome = '';
            this.mensagem = '';
        }
    }
}
</script>
<template>
    <div>
        <h2>Deixe uma mensagem</h2>
        <form action="" @submit="enviarFormulario" id="form">
            <input type="text" placeholder="Nome" v-model="nome" autocomplete="off">
            <textarea cols="30" rows="10" placeholder="Mensagem" v-model="mensagem" autocomplete="off" ></textarea>
            <button type="submit">Enviar</button>
        </form>
        <div class="all-post">
            <h2>Comentários: {{qtd_posts}}</h2>
            <div class="one-post" v-for="(p, id) in lista_posts" :key="id">
                <Post :post="p"/>
            </div>
        </div>
    </div>
</template>
<style>
    form{
        display: flex;
        flex-direction: column;
    }
    input, textarea, button{
        background-color: rgb(58, 58, 58);
        margin-top:10px;
        resize: none;
    }
    button{
        border: 1px solid #00bd7e;
        color:#00bd7e;
        padding: 5px 0;
    }
    input, textarea{
        padding: 5px;
        color: rgb(148, 149, 150);
    }
</style>