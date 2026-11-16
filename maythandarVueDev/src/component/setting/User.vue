<template>
    <v-row class="mt-1 mr-1 ml-1 elevation-2">
        <v-col cols="12">
            <v-card>
                <v-card-title><v-icon size="small" @click="OpenEntry">mdi-plus-circle-outline</v-icon>
                    User list
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <v-data-table-server 
                    :items="userlist"
                    :headers="header"
                    :items-length="recordTotal"
                    v-model:items-per-page="pagination.itemsPerPage"
                    >
                    <template v-slot:item.id="{item}">
                        <v-icon @click="Edit(item)" color="orange" class="mt-1">mdi-table-edit</v-icon>
                        <v-icon @click="Delete(item.id)" class="ml-2" color="red">mdi-delete-circle</v-icon>
                    </template>
                    </v-data-table-server>
                </v-card-text>
            </v-card>
        </v-col>
        <userEntry :dialog="entryDialog" @save="save" @close="CloseEntry" @edited="Edited" ref="entryRef"/>
    </v-row>
</template>
<script setup>
import {ref} from 'vue';
import userEntry from './userEntry.vue';

const entryRef=ref(null)
const entryDialog=ref(false)

const recordTotal = ref(0)
const pagination=ref({
    itemsPerPage:10
})

const header=ref([
    {title:'Action',aligh:'start',sortable:false,key:'id'},
    {title:'Name',aligh:'start',sortable:false,key:'name'},
    {title:'Username',aligh:'start',sortable:false,key:'username'},
    {title:'Password',aligh:'start',sortable:false,key:'password'}
])
 const userlist=ref([

 ])
 const OpenEntry=()=>{
    entryDialog.value=true
 }
 const CloseEntry=()=>{
    entryDialog.value=false
 }
 const save=(data)=>{
    //console.log(data)
    userlist.value.push(data)
    recordTotal.value=userlist.value.length
    CloseEntry()
 }
const Edited=(data)=>{
    //console.log(data)
    const newResult=userlist.value.map((item)=>{
        //console.log(item)
        return item.id===data.id? data: item
    })
    userlist.value=newResult
    recordTotal.value=userlist.value.length
    entryRef.value.isedited=false
    CloseEntry()
}
 const Delete =(id)=>{
    const result = userlist.value.filter(x=>x.id!=id)
    userlist.value = result
    recordTotal.value=userlist.value.length
 }
const Edit=(data)=>{
    entryRef.value.user=data
    entryRef.value.isedited=true
    OpenEntry()

}
</script>