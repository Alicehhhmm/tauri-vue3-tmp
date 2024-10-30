<script setup lang="ts">
import { onMounted , ref} from "vue";
import HelloWorld from './components/HelloWorld.vue'
// When using the Tauri API npm package:
import { invoke } from '@tauri-apps/api/core';

import { useWindow } from "./examples/UseCreateWind";

 // Invoke the command
 async function useCommand() {
    let res = await  invoke('my_custom_command1');
    console.log("Invoke command called: " + res);
    return res;
 }

async function useCommand2() {
    let res = await  invoke('my_custom_command2');
    console.log("Invoke command called: " + res);
    return res;
}

const count = ref(0)
function handleCommand() {
    ++count.value;
    useCommand()
    console.log('On click handlerCommand Fn: ' , count.value);
}

const { createWebviewWindow } = useWindow()
async function handleCreate() {
    console.log('On click handleCreate Fn1: ' , );
    // const wind = await createWebviewWindow('设置', 'my-label', 840, 840)
    // const wind = await createWebviewWindow('设置', 'plot-window',440, 340)
    // const wind = await createWebviewWindow('设置', 'main-two', 240, 140)
    const wind = await createWebviewWindow('设置', 'crwind',440, 340)
    setTimeout(async () => {
            console.log('On click handleCreate Fn: ' , wind);
    }, 300);

}

onMounted(() => {
    useCommand()
    useCommand2()
})

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <br>
  <button class="btn btn-" @click="handleCommand">handleCommand {{ count }}</button>  
  <button class="btn btn-" @click="handleCreate">create wind</button>  
  
  <br>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
