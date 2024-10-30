<script setup lang="ts">
import { onMounted, ref } from "vue";

// When using the Tauri API npm package:
import { invoke } from '@tauri-apps/api/core';

import { useWindow } from "@/views/examples/UseCreateWind";

// Invoke the command
async function useCommand() {
    let res = await invoke('my_custom_command1');
    console.log("Invoke command called: " + res);
    return res;
}

async function useCommand2() {
    let res = await invoke('my_custom_command2');
    console.log("Invoke command called: " + res);
    return res;
}

const count = ref(0)
function handleCommand() {
    ++count.value;
    useCommand()
    console.log('On click handlerCommand Fn: ', count.value);
}

const { createWebviewWindow } = useWindow()
async function handleCreate() {
    console.log('On click handleCreate Fn1: ',);
    // const wind = await createWebviewWindow('设置', 'my-label', 840, 840)
    // const wind = await createWebviewWindow('设置', 'plot-window',440, 340)
    // const wind = await createWebviewWindow('设置', 'main-two', 240, 140)
    const wind = await createWebviewWindow('设置', 'crwind', 440, 340)
    setTimeout(async () => {
        console.log('On click handleCreate Fn: ', wind);
    }, 300);

}

onMounted(() => {
    useCommand()
    useCommand2()
})

</script>

<template>
    <div class="container-exp">
        <nav>
        <button class="m-r">
            <RouterLink to="/">Go to Home</RouterLink>
        </button>
    </nav>
    <br>
    <button class="m-r" @click="handleCommand">handleCommand {{ count }}</button>
    <button class="m-r" @click="handleCreate">create wind</button>
    <br>
    </div>
    
</template>

<style lang="scss" scoped>
.container-exp{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    text-align: center;
    padding: 20px;
    border-radius: 8px;
    background-color: #F2F2F2;
    
    nav {
        width: 100vw;
        padding: 10px 0;
        background-color: #232425;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }
}
</style>
