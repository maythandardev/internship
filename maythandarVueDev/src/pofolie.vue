<template>
    <v-app>
        <v-app-bar>
            <v-app-bar-title>
                Internship Program
            </v-app-bar-title>
            <v-navigation-drawer permenent>
                <v-link-item link title="Home" to="\"></v-link-item>
                <v-link-item link title="About" to="\about"></v-link-item>
            </v-navigation-drawer>
        </v-app-bar>
        <!-- <v-app-bar color="#1769C2" height="65" elevation="2">
        <v-container class="d-flex align-center" max-width="1000">
        <v-avatar color="white" size="32">
            <span class="text-primary font-weight-bold">AR</span>
        </v-avatar>
        <span class="ml-2 text-white font-weight-bold">Alex Rivera</span>
        <v-chip size="x-small" color="white" variant="outlined" class="ml-2">INTERN</v-chip>
        <v-spacer></v-spacer>

            <v-btn variant="text" color="white" to="/about"><v-icon size="small" icon="mdi-account"></v-icon>
            About
            </v-btn>

            <v-btn variant="text" color="white" to="/skill"><v-icon size="small" icon="mdi-code-tags"/>
            Skills
            </v-btn>

            <v-btn variant="text" color="white" to="/"><v-icon size="small" icon="mdi-folder-open"/>
            Projects
            </v-btn>

            <v-btn variant="text" color="white" to="/"><v-icon size="small" icon="mdi-chart-line-variant"/>
            Experience
            </v-btn>

            <v-btn variant="text" color="white" to="/"><v-icon size="small" icon="mdi-email"></v-icon>
            Contact
            </v-btn>
            <v-spacer></v-spacer>
            <v-chip size="x-small" color="green" variant="outlined" class="ml-2">Hire Me</v-chip>

        </v-container> -->
        
        
        <v-main>
            <RouterView/>           
        </v-main>
    </v-app>
</template>
<script setup></script>