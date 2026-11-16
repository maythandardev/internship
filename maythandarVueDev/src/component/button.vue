<template>

   <button @click="btnClick">{{ props.name }}</button>
</template>
<script setup>
const props=defineProps(['name','value'])
const emits=defineEmits(['valuechange'])


const btnClick=()=>{
    emits('valuechange',props.name )
}
</script>

<style scoped>

button {
    background-color: #42b883;
    color: white;
    border: none;
    padding: 10px 24px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

/* Hover Effect */
button:hover {
    background-color: #35495e;
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* Click Effect */
button:active {
    transform: scale(0.95);
}

/* Focus Effect */
button:focus {
    outline: 2px solid #42b883;
    outline-offset: 3px;
}
</style>