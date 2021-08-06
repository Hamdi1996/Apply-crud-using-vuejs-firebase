import VueRouter from "vue-router";
import EmployeeList from '@/components/EmployeeList';
import ShowEmployee from '@/components/ShowEmployee';
import EditEmployee from '@/components/EditEmployee';
import AddEmployee from '@/components/AddEmployee';

export default new VueRouter({
    routes :[
    {
        path:'/',
        name:'EmployeeList',
        component:EmployeeList

    },
    {
        path:'/show/:id',
        name:'ShowEmployee',
        component:ShowEmployee

    },
    {
        path:'/add',
        name:'AddEmployee',
        component:AddEmployee

    },
    {
        path:'/edit/:id',
        name:'EditEmployee',
        component:EditEmployee

    },



]

});
