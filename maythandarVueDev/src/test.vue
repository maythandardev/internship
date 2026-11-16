<template>
    <div style="display:grid">
        <h5>{{ userInput }}</h5>
    </div>
    <div style="display:flex">
        <BUTTON name="1" @valuechange="UpdateText"/>
        <BUTTON name="2" @valuechange="UpdateText"/>
        <BUTTON name="3" @valuechange="UpdateText"/>
        <BUTTON name="+" @valuechange="UpdateText"/>
        <BUTTON name="Clear" @valuechange="UpdateText"/>
    </div>
    <div style="display:flex">
        <BUTTON name="4" @valuechange="UpdateText"/>
        <BUTTON name="5" @valuechange="UpdateText"/>
        <BUTTON name="6" @valuechange="UpdateText"/>
        <BUTTON name="-" @valuechange="UpdateText"/>
        <BUTTON name="Delete" @valuechange="UpdateText"/>
    </div>
    <div style="display:flex">
        <BUTTON name="7" @valuechange="UpdateText"/>
        <BUTTON name="8" @valuechange="UpdateText"/>
        <BUTTON name="9" @valuechange="UpdateText"/>
        <BUTTON name="*" @valuechange="UpdateText"/>
        <BUTTON name="=" @valuechange="UpdateText"/>
    </div>
</template>

<script setup> 
import { ref } from 'vue'
import BUTTON from '@/component/button.vue';
const userInput=ref('')
const UpdateText=(val)=>{
    if(val==='='){
       const res=userInput.value.includes("+") 
       if(res){
        const splitData=userInput.value.split("+")
        let total=0;
        splitData.forEach((data)=>{
            total+=parseInt(data)
        })
        userInput.value=total;
       }else{
          const minus=userInput.value.includes("-")
       if(minus){
          const splitData=userInput.value.split("-")
          let total=0;
          total=splitData[0]-splitData[1]
          userInput.value=total;
       }else{
        const multi=userInput.value.includes("*")
        if(multi){
          const splitData=userInput.value.split("*")
          let total=0;
          total=splitData[0]*splitData[1]
          userInput.value=total;
        }      
       }
      }
    }else if(val==='Clear'){
      userInput.value=''
    }else if(val=='Delete'){
      userInput.value=userInput.value.slice(0, -1);
    }else{
        userInput.value+=String(val);
    }
}
</script>
