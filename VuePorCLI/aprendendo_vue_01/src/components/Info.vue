<script>
export default {
    name: 'Info',
    props: {
        user: Object
    },
    data(){
        return{
            esta_trabalhando: true,
            teste:true,
            mostrar_email: false,
            status:'',
            caminhoImgEmail: '/Img/exposto.png',
            descricaoImgEmail : 'E-mail escondido',
            classStatus:'',
            meu_link: 'https://github.com/wemmersonalb',
            meu_email: 'wemmerson.albuquerque@gmail.com',
            back_end: ['Java', 'Python', 'Javascript'],
            front_end:[
                {
                    id: 0,
                    tech: 'Vue Js',
                    exp: 'training'
                },
                {
                    id: 1,
                    tech: 'React Js',
                    exp: 'training'
                },
                {
                    id: 2,
                    tech: 'Bootstrap',
                    exp: 'training'
                }
            ]

        }
    },
    created(){
        if(this.teste){
            this.status = 'Open to Work!'
            this.classStatus = 'green'
        }else{
            this.status = 'I\'ve a Job'
            this.classStatus = 'red'
        }
    },
    methods: {
        showEmail(){
            this.mostrar_email = !this.mostrar_email
            this.caminhoImgEmail = this.mostrar_email ? '/Img/escondido.png' : '/Img/exposto.png'
            this.descricaoImgEmail = this.mostrar_email ? 'E-mail exposto' : 'E-mail escondido'
        }
    }
}
</script>
<template>
    <div>
        <p :class="classStatus">{{status}}</p>
        <p>Linguagens de programação que sei utilizar no Back-end:</p>
        <ul>
            <li v-for="(tech, id) in back_end" :key="id">
                {{tech}}
            </li>
        </ul>
        <p>Linguagens de programação que sei utilizar no Front-end:</p>
        <ul>
            <li v-for="tech in front_end" :key="tech.id">
                {{tech.tech}}
                <ul>
                    <li>{{tech.exp}}</li>
                </ul>
            </li>
        </ul>
        <p>Meu github é <a v-bind:href="meu_link">este aqui.</a></p>
        <div class="span-email">            
            <span v-if="mostrar_email" >{{meu_email}}</span>
            <span v-else class="spanSizeEmail">##############@######.###</span>
            <img @click="showEmail" :src="caminhoImgEmail"  :alt="descricaoImgEmail" class="botaoEmail"/>
        </div>     
        <div>
            <h3>{{user.nome}}</h3>
            <h4>{{user.email}}</h4>
        </div>   
        
    </div>
</template>
<style>
    .red{
        color: red;
    }
    .blue{
        color: blue;
    }
    .botaoEmail{
        width: 20px;
        margin-left: 10px;
        margin-top: -2px;
    }
    .span-email{
        display: flex;
        width: 300px;
        justify-content: space-between;
        align-content: center;
        align-items: center;
    }
</style>