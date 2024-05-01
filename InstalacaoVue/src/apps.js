const MyNameApp={
    data() {
        return{
            name:"Wemmerson",
            age: 30,
            input_name: ""
        }
    },
    methods:{
        submitform(e){
            e.preventDefault();
            this.name = this.input_name;
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");