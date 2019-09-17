<template>
    <form action="" style="width: 400px">
        <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
                <p class="modal-card-title">Register</p>
            </header>
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
            </section>
            <footer class="modal-card-foot">
                <b-icon
                icon="view-dashboard"
                size="is-large"
                type="is-primary">
            </b-icon>
                <!-- Will call close method on parent Modal -->
                <button class="button" type="button" @click="$parent.close()">Close</button>
                <button class="button is-primary" @click="callParentSignup">Register</button>
            </footer>
        </div>
    </form>
</template>

<style>

</style>

<script>
export default {
    name: 'signupForm',
    props: {
    },

    data: function () {
        return {
        }
    },

    methods : {
        callParentSignup : function () {
            this.$parent.close()
            this.$buefy.toast.open({
                message: 'This function will be implemented soon. No promise though..',
                type: 'is-success'
            })
        }
    }

}
</script>