<template>
    <v-app>

        <v-app-bar>
            <v-app-bar-title>Internship Program</v-app-bar-title>
        </v-app-bar>

        <v-navigation-drawer permanent>
            <v-list-item link title="Home" to="/"></v-list-item>
            <v-list-item link title="About" to="/about"></v-list-item>
            <v-list-item link title="User" to="/user"></v-list-item>
            <v-list-item link title="Role" to="/role"></v-list-item>
        </v-navigation-drawer>
        
        <v-main>
            <router-view />
        </v-main>

    </v-app>
</template>
<script setup>
//spa single page application function declare
</script>