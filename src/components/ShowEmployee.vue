<template>

        <div class="container">
             <h2>Show Employee
                    
                </h2>
            <a href="#/" class="btn btn-info">Employee List</a>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Department</th>
      <th scope="col">Age</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>{{ employess.name }}</td>
      <td>{{ employess.department }}</td>
      <td>{{ employess.age }}</td>
      <td>
          <button 
          type="button" 
          class="btn btn-info"
          @click="editemp(key)"
           >Edit</button>
               <button 
          type="button" 
          class="btn btn-danger mx-4"
          @click="deleteemp(key)"
           >Delete</button>


      </td>
    </tr>
  </tbody>
</table>
        </div>
</template>

<script>
import  firebase from '../Firebase';
import  router from '../router';
export default {
    name:'ShowEmployee',
    data(){
        return {
            key:'',
            employess:{},
        }

    },
      created(){
          const ref= firebase.firestore().collection('employess').doc(this.$route.params.id)
          ref.get().then((doc)=>{
              if(doc.exists){
                  this.key =doc.id,
                  this.employess =doc.data();
              }
              else {
                  alert("Not Found");
              }
          })
    
    },
    methods:{
        editemp(id){
            router.push({
                name:'EditEmployee',
                params:{id:id}
            })
        },
        deleteemp(id){                      
           firebase.firestore().collection('employess').doc(id).delete().then(()=>{
                router.push({
                name:'EmployeeList',
               
            })
            }).catch((e)=>{
                alert(e)
            })
        },
    }}
        
    
  
    

</script>


