<template>
    <div class="container">
        <div class="row">
            <div class="col">
                Edit Employee
                <router-link :to="{name:'ShowEmployee',params:{id:key}}">Show Empolyee</router-link>
            </div>
            <div class="col">
                <form @submit="onsubmit">
                    <div class="mb-3">
                        <label for="" class="form-label">Name</label>
                        <input type="text" v-model.trim="employess.name" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Department</label>
                        <input type="text" v-model.trim="employess.department" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">Age</label>
                        <input type="text" v-model.trim="employess.age" class="form-control">
                    </div>

                    <button type="submit" class="btn btn-primary">Update</button>
                </form>

            </div>
        </div>

    </div>
</template>



<script>
    import firebase from '../Firebase';
    import router from '../router';
    export default {
        name: 'EditEmployee',
        data() {
            return {
                key: this.$route.params.id,
                employess: {},
            }
        },
        created() {
            const ref = firebase.firestore().collection('employess').doc(this.$route.params.id);
            ref.get().then((doc) => {
                if (doc.exists) {
                    this.employess = doc.data();
                } else {
                    alert("Not Found");
                }
            })

        },
        methods: {

            onsubmit(evt) {
                evt.preventDefault(); //  prevent Form to submit by default
                const updateRef = firebase.firestore().collection('employess').doc(this.$route.params
                .id); //connect with database
                updateRef.set(this.employess).then(() => {
                    this.employess.name = '',
                        this.employess.department = '',
                        this.employess.age = '',
                        // when sumbit button form it give me empty data and after delete 
                        // redirect me usng router.push to route
                        router.push({
                            name: 'ShowEmployee',
                            params: {
                                id: this.$route.params.id
                            }

                        })
                }).catch((e) => {
                    alert(e)
                })
            }
        }

    }
</script>