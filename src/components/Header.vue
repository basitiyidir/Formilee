<template>
    <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand href="#">{{title}}</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item :to="{ path: '/' }">Design</b-nav-item>
                <b-nav-item :to="{ path: '/preview' }">Preview</b-nav-item>
                <b-nav-item :to="{ path: '/about' }">About</b-nav-item>
            </b-navbar-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <span class="navbar-text small">
                    Last update : April 14, 2019
                </span>
            </b-navbar-nav>
        </b-collapse>
      </b-navbar>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: String
    }
}
</script>

<style scoped lang="scss">

</style>
