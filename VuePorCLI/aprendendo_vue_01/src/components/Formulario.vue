<script>
export default {
    name: 'Formulario',
    data(){
        return {
            nome:'',
            mensagem: ''
        }
    },
    methods:{
        enviarFormulario(e){
            e.preventDefault();            
            console.log('Formulário enviado com sucesso');
            console.log('Nome: '+this.nome);
            console.log('Mensagem: '+this.mensagem);
        }
    }
}
</script>
<template>
    <div>
        <h2>Deixe uma mensagem</h2>
        <form action="" @submit="enviarFormulario">
            <input type="text" placeholder="Nome" v-model="nome">
            <textarea cols="30" rows="10" placeholder="Mensagem" v-model="mensagem"></textarea>
            <button type="submit">Enviar</button>
        </form>
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