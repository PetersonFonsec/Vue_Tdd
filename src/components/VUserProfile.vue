<template>
    <div>

        <div class="user-profile">
            <img class="user-profile__avatar" :src="user.avatar_url" />
        </div>        

        <div class="user-profile__name">
            {{ user.name }}
        </div>

        <div class="user-profile__bio">
            {{ user.bio }}
        </div>

    </div>
</template>

<script>
export default {
    name: 'VUserProfile',
    props: {
        user: {
            type: Object,
            required: true,
        }
  }
}
</script>

<style>

</style>
