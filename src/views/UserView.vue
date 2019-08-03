<template>
    <div>
        <VUserProfile :user="user" />
        <VUserSearchForm/>
        UserView
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
    computed: {
        ...mapState({
            user: 'user',
        })
    },
}
</script>

<style>

</style>
