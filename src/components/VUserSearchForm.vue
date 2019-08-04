<template>
    <div>        
        <form @submit.prevent="$emit('submitted', username)">
            <input type="text" v-model="username" />
            <button type="submit">Enviar</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'VUserSearchForm',
    data(){
        return {
            username:''
        }
    }
}
</script>

<style>
</style>
