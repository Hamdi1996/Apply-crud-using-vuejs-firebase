<template>
    <div class="container">
        <div class="row">
            <div class="col">
                Add Emplyee
                <a class="btn btn-info" href="#/">Employee List</a>
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

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>

    </div>
</template>


<script>
    import firebase from '../Firebase';
    import router from '../router';
    export default {
        name: 'AddEmployee',
        data() {
            return {
                employess: {},
                ref: firebase.firestore().collection('employess')
            }
        },
        methods: {

            onsubmit(evt) {
                evt.preventDefault(); //  prevent Form to submit by default
                this.ref.add(this.employess).then(() => {
                    this.employess.name = '',
                        this.employess.department = '',
                        this.employess.age = '',
                        // when sumbit button form it give me empty data and after delete 
                        // redirect me usng router.push to route
                        router.push({
                            name: 'EmployeeList',

                        })
                }).catch((e) => {
                    alert(e)
                })
            }
        }

    }
</script>