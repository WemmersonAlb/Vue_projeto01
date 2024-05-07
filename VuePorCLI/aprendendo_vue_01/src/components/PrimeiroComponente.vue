<script>
export default {
    name: 'PrimeiroComponente',
    data() {
        return {
            name: 'Wemmerson',
            age: 29
        }
    }
}
</script>

<template>
    <div>
        <h1>Olá <span class="beautyName">{{ name }}</span></h1>
        <p>Bem-vindo a sua página VUE</p>
    </div>
</template>

<style>
    .beautyName{
        color:red;
        font-weight: 500;
    }
</style>