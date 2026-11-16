<template>
    <v-dialog v-model="props.dialog" persistant width="50%">
        <v-toolbar color="primary">
            <v-toolbar-title>User Entry</v-toolbar-title>
        </v-toolbar>
        <v-card rounded="0">
            <v-row class="mt-2">
                <v-col cols="3" class="text-right">
                    <p class="mr-2">ID</p>
                </v-col>
                <v-col cols="8" >
                    <v-number-input :min="1" v-model="user.id" variant="outlined" density="compact"></v-number-input>
                </v-col>
            </v-row>
            <v-row class="mt-2" no-gutters>
                <v-col cols="3" class="text-right">
                    <p class="mr-2">Name</p>
                </v-col>
                <v-col cols="8" >
                    <v-text-field v-model="user.name" variant="outlined" density="compact"></v-text-field>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col cols="3" class="text-right">
                    <p class="mr-2">Username</p>
                </v-col>
                <v-col cols="8" >
                    <v-text-field v-model="user.username" variant="outlined" density="compact"></v-text-field>
                </v-col>
            </v-row>
            <v-row no-gutters>
                <v-col cols="3" class="text-right">
                    <p class="mr-2">Password</p>
                </v-col>
                <v-col cols="8" >
                    <v-text-field v-model="user.password" variant="outlined" density="compact"></v-text-field>
                </v-col>
            </v-row>
            <v-row no-gutters class="mb-3">
                <v-col cols="11" class="text-right">
                    <v-btn @click="closeDialog" class="mr-2" color="warning">Cancel</v-btn>
                    <v-btn @click="save" color="primary">Save</v-btn>
                </v-col>
            </v-row >
        </v-card>
    </v-dialog>
</template>
<script setup>
import User from '@/model/userModel';
import {ref} from 'vue';
const props=defineProps({
    dialog:Boolean
})

const emits=defineEmits([
    'close','save','edited'
])

const dialog=ref(false)
const isedited=ref(false)

const closeDialog=()=>{
    emits('close')
    isedited.value=false
    user.value=new User()
}
//reuseable
// const user=ref({
//     name:'',
//     username:'',
//     password:''
// }
// )

const user=ref(new User())

const save=()=>{
    if(isedited.value){
        emits('edited',user.value)
    }else{
        emits('save',user.value)
        
    }
    user.value=new User()
    
    
}

defineExpose({
    user,
    isedited
})
</script>