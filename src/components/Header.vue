<template>
    <b-navbar fixed-top >
        <template slot="brand">
            <b-navbar-item href="/">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item
            tag="router-link"
            to="/"> <!-- Gotta note this down -->
                Home
            </b-navbar-item>
            <b-navbar-item
            tag="router-link"
            to="/about">
                About
            </b-navbar-item>
            <b-dropdown
                hoverable
                position="is-bottom-left"
                aria-role="menu">
                <a
                    class="navbar-item"
                    slot="trigger"
                    role="button">
                    <span>Menu</span>
                </a>
                <b-dropdown-item value="products" aria-role="menuitem">
                    <b-icon icon="cart"></b-icon>
                    Products
                </b-dropdown-item>
                <b-dropdown-item value="blog" disabled aria-role="menuitem">
                    <b-icon icon="book-open"></b-icon>
                    Blog
                </b-dropdown-item>
                <hr class="dropdown-divider" aria-role="menuitem">
                <b-dropdown-item value="settings">
                    <b-icon icon="settings"></b-icon>
                    Settings
                </b-dropdown-item>
                <b-dropdown-item value="logout" aria-role="menuitem">
                    <b-icon icon="logout"></b-icon>
                    Logout
                </b-dropdown-item>
            </b-dropdown>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a @click='this.signup' class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <!-- <a @click='this.login' class="button is-light">
                        Log in
                    </a> -->
                    <b-dropdown
                    hoverable
                    position="is-bottom-left"
                    aria-role="menu">
                        <a
                            class="button is-light"
                            slot="trigger"
                            role="button">
                            <strong>Login</strong>
                            <!-- <b-icon icon="menu-down"></b-icon> -->
                        </a>

                        <b-dropdown-item
                            aria-role="menu-item"
                            :focusable="false"
                            custom
                            paddingless>
                            <form action="">
                                <div class="modal-card" style="width:300px;">
                                    <section class="modal-card-body">
                                        <b-field label="Email">
                                            <b-input
                                                type="email"
                                                placeholder="Your email"
                                                required>
                                            </b-input>
                                        </b-field>

                                        <b-field label="Password">
                                            <b-input
                                                type="password"
                                                password-reveal
                                                placeholder="Your password"
                                                required>
                                            </b-input>
                                        </b-field>

                                        <b-checkbox>Remember me</b-checkbox>
                                    </section>
                                    <footer class="modal-card-foot">
                                        <button class="button is-primary">Login</button>
                                    </footer>
                                </div>
                            </form>
                        </b-dropdown-item>
                    </b-dropdown>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<style>
.navbar{
    padding: 15px;
    box-shadow: 0 4px 12px 0 rgba(0,0,0,.2);
}
.navbar-item{
    font-weight: 550;
}
</style>

<script>
export default {
    name: 'mainHeader',

    props: {
    },

    methods : {
        signup : function () {
            this.$buefy.toast.open({
                message: 'This function will be implemented soon. No promise though..',
                type: 'is-success'
            })
        }
    }
}
</script>
