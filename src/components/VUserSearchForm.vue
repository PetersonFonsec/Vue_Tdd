<template>
    <div>        
        <form @submit.prevent="$emit('submitted', username)">

            <el-input type="text" v-model="username" 
                placeholder="Pesquise o usuário"
                class="search-form__input"/>

            <el-button 
                class="search-form__button"
                native-type="submit"
                slot="append"
                icon="el-icon-search">Enviar</el-button>

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
