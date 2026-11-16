<template>
    <v-container>
      <v-card>
        <v-row align="center">
            <v-col cols="12" md="4">
                <div class="pa-5 text-center" rounded="lg" elevation="2">
                    <v-avatar size="130">
                        <v-img
                            alt="John"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs93_FqStEMDy5FyAEgcxglj0LPwXl5H3ISozJ7P9SKw&s=10"
                        ></v-img>
                    </v-avatar>
                     <h2 class="mt-4">Alex Rivera</h2>
                     <p class="text-blue">Computer Science B.S Candidate </p>
                     <v-row>
                     <v-chip size="small" class="mt-3" color="primary">Seeking Internship</v-chip>
                     <v-chip size="small" class="mt-3" color="green">Open in relocate</v-chip>
                     </v-row>
                </div>
            </v-col>
            <v-col cols="12" md="8" class="text-left">
                <div class="pa-4">
                    <v-chip size="small" class="mt-3" color="primary">Hello World . Software Engineering Candidate</v-chip>
                    <h1 class="text-h3 font-weight-bold mt-4">I'm Alex Rivera</h1>
                    <h2 class="text-h5 text-primary mt-2">Aspiring Software Developer</h2>
                    <p class="text-body-1 text-grey-darken-1 mt-4">
                        I am passionate about building modern
                        web applications and solving real-world
                        problems through technology.
                    </p>
                </div>

                <div class="d-flex flex-wrap ga-5 mt-5 mb-3 text-left">
                    <v-btn color="primary" rounded="lg">Get In Touch</v-btn>
                    <v-btn color="primary" variant="outlined" rounded="lg">Download CV</v-btn>
                </div>
            </v-col>
        </v-row>
        </v-card>
    </v-container>
</template>
<script setup></script>