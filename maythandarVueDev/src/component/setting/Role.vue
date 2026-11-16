<template>
    <v-row>
        <v-col>
            <v-card>
                <v-card-title>Role</v-card-title>
            </v-card>
            <v-card-text>
                <v-data-table-server 
                :items="list"
                :headers="header"
                :items-length="recordTotal"
                v-model:items-per-page="pagination.itemsPerPage"
                >

                </v-data-table-server>
            </v-card-text>
        </v-col>
    </v-row>
</template>
<script setup>
import {ref} from 'vue';
const recordTotal = ref(0)
const pagination=ref({
    itemsPerPage:50
})
const header=ref([
    {title:'Name',aligh:'start',sortable:false,key:'name'},
    {title:'Description',aligh:'start',sortable:false,key:'description'}
])
const list=[
    {id:3,name:'Admin',description:'Hello Vue'},
    {id:3,name:'User',description:'Hello Vue'},
]
</script>