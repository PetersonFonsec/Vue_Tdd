<template>
    <div>
        <VUserProfile :user="user" />
        <VUserSearchForm @submitted="searchUser"/>
    </div>
</template>

<script>
import VUserProfile from '@/components/VUserProfile'
import VUserSearchForm from '@/components/VUserSearchForm'
import { mapState } from 'vuex'

export default {
    name : 'UserView',
    components: {
        VUserProfile,
        VUserSearchForm
    },    
    methods: {
        searchUser(username) {
        this.$store.dispatch('SEARCH_USER', { username })
        }
    },
    computed: {
        ...mapState({
            user: 'user',
        })
    },
}
</script>

<style>

</style>
