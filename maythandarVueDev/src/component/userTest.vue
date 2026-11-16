<template>
    <p>User</p>

<h1>{{props.name }}</h1>
<input type="button" value="SendEvent" @click="clickBtn">


</template>

<script setup>
//this is child
//define emit
import {defineEmits } from 'vue';
const props= defineProps(['name'])
const emits=defineEmits(['save','change'])
const clickBtn =()=>{
    //emits('save')
    emits('save',1) // name, data
}
</script>