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

export default {
    name : 'UserView',
    components: {
        VUserProfile,
        VUserSearchForm
    },
    data(){
        return{
            user: { name: '' }
        }
    }    
}
</script>

<style>

</style>
