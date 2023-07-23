<script setup>
import { useForm } from '@inertiajs/vue3'

const form = useForm({
    name: null,
    region: null,
    provider: null,
    nodeVersion: null,
    osIdentifier: null,
    resourceType: null,
    sizeIdentifier: null,
})

</script>

<template>
    <div class="flex h-screen flex-col items-center justify-center space-y-8 text-center text-gray-700">
        <form @submit.prevent="form.post('/servers/app')">
            <div class="grid gap-4 grid-cols-2 grid-rows-2">
                <div class="text-left">
                    <label for="input-label" class="block text-sm font-medium mb-2">Name</label>
                    <input v-model="form.name" type="text" id="input-label"
                        class="py-3 px-4 block border-gray-200 w-100 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        placeholder="">
                </div>

                <div class="text-left">
                    <label for="hs-select-label" class="block text-sm font-medium mb-2">Provider</label>
                    <select v-model="form.provider" id="hs-select-label"
                        class="py-3 px-4 pr-9 block border-gray-200 w-100 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                        <option value="aws">AWS</option>
                        <option vlaue="digital-ocean">Digital Ocean</option>
                        <option value="custom">Custom VPS</option>
                    </select>
                </div>

                <div class="text-left">
                    <label for="hs-select-label" class="block text-sm font-medium mb-2">Type</label>
                    <select v-model="form.resourceType" id="hs-select-label"
                        class="py-3 px-4 pr-9 block border-gray-200 w-100 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                        <option value="app">App Server</option>
                        <option value="db">DB Server</option>
                        <option value="redis">Redis Server</option>
                    </select>
                </div>

                <div class="text-left">
                    <label for="hs-select-label" class="block text-sm font-medium mb-2">Region</label>
                    <select v-model="form.region" id="hs-select-label"
                        class="py-3 px-4 pr-9 block border-gray-200 w-100 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                        <option value="us-east-1">Virginia</option>
                        <option value="us-east-2">Ohio</option>
                        <option value="us-west-1">California</option>
                        <option value="us-west-2">Oregon</option>
                    </select>
                </div>

                <div class="text-left">
                    <label for="hs-select-label" class="block text-sm font-medium mb-2">Server Size</label>
                    <select v-model="form.sizeIdentifier" id="hs-select-label"
                        class="py-3 px-4 pr-9 block border-gray-200 w-100 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                        <option value="t2.nano">t2.nano</option>
                        <option value="t2.micro">t2.micro</option>
                        <option value="t2.small">t2.small</option>
                        <option value="t2.medium">t2.medium</option>
                        <option value="t2.large">t2.large</option>
                    </select>
                </div>

                <div class="text-left">
                    <label for="hs-select-label" class="block text-sm font-medium mb-2">OS</label>
                    <select v-model="form.osIdentifier" id="hs-select-label"
                        class="py-3 px-4 pr-9 block border-gray-200 w-100 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                        <option value="ubuntu-22.04-lts">Ubuntu 22.04 LTS</option>
                        <option value="ubuntu-20.04-lts">Ubuntu 20.04 LTS</option>
                        <option value="ubuntu-18.04-lts">Ubuntu 18.04 LTS</option>
                    </select>
                </div>

                <div class="text-left">
                    <label for="hs-select-label" class="block text-sm font-medium mb-2">Node.js Version</label>
                    <select v-model="form.nodeVersion" id="hs-select-label"
                        class="py-3 px-4 pr-9 block border-gray-200 w-100 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
                        <option value="node-v14-lts">Node.js 14 LTS</option>
                        <option value="node-v16-lts">Node.js 16 LTS</option>
                        <option value="node-v18-lts">Node.js 18 LTS</option>
                    </select>
                </div>
            </div>
            <button type="submit" :disabled="form.processing"
                class="w-full mt-4 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                Create Server
            </button>
        </form>
    </div>
</template>
