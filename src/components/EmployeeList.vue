<template>
  <div>
    <h1>Employee List</h1>
    <a class="btn btn-info" href="#/add">Add</a>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Department</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody v-for="(item,id) in employess" :key="id">
          <tr>
            <th scope="row">{{ item.key }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.department }}</td>
            <td>
              <button type="button" class="btn btn-info" @click="details(item.key)">Show</button>


            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import firebase from '../Firebase';
  import router from '../router';
  export default {
    name: 'EmployeeList',

    data() {
      return {
        // Employee Array empty to get data from firebase and store it and using to dislay in ht,ml
        employess: [],
        ref: firebase.firestore().collection('employess') //refence from firebase to get data 

      }

    },
    created() {
      this.ref.onSnapshot((querySnapshot) => {
        this.employess = [];
        querySnapshot.forEach((doc) => {
          this.employess.push({
            key: doc.id,
            name: doc.data().name,
            age: doc.data().name,
            department: doc.data().department,
          })
        })
      })
    },
    methods: {
      details(empid) {
        router.push({
          name: 'ShowEmployee',
          params: {
            id: empid
          }
        })

      }

    }



  }
</script>



<style lang="">

</style>