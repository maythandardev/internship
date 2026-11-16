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

    <v-container>
    
        <p class="text-headline-small font-weight-bold"><v-icon icon="mdi-code-tags"></v-icon>Technical Proficiency</p>
        <v-card class="ma-5 pa-2">
            <v-row class="color:blue">
            <v-col cols="3"> 
                <a icon="$vuetify" class="text-decoration-underline"href="#"><v-icon icon="$vuetify"></v-icon>Languages</a>
            </v-col>
            <v-col cols="3">            
                <a class="text-decoration-none"><v-icon icon="$vuetify"></v-icon>Frameworks & Web</a>
            </v-col>
            <v-col cols="3">
                <a class="text-decoration-none"><v-icon icon="$vuetify"></v-icon>Tools & Cloud</a>
            </v-col>
            </v-row>
            <v-row>
                    <v-col cols="12" md="6">
                        <div class="mb-5">
                        <div class="d-flex justify-space-between mb-2">
                            <span>HTML</span>
                            <span>90%</span>
                        </div>

                        <v-progress-linear
                            model-value="90"
                            color="primary"
                            height="8"
                            rounded
                        />
                        </div>

                        <div class="mb-5">
                        <div class="d-flex justify-space-between mb-2">
                            <span>CSS</span>
                            <span>80%</span>
                        </div>

                        <v-progress-linear
                            model-value="80"
                            color="primary"
                            height="8"
                            rounded
                        />
                        </div>

                        <div class="mb-5">
                        <div class="d-flex justify-space-between mb-2">
                            <span>JavaScript</span>
                            <span>70%</span>
                        </div>

                        <v-progress-linear
                            model-value="70"
                            color="primary"
                            height="8"
                            rounded
                        />
                        </div>

                    </v-col>
                    <v-col cols="12" md="6">
                        <div class="mb-5">
                        <div class="d-flex justify-space-between mb-2">
                            <span>PHP</span>
                            <span>75%</span>
                        </div>

                        <v-progress-linear
                            model-value="75"
                            color="primary"
                            height="8"
                            rounded
                        />
                        </div>

                        <div class="mb-5">
                        <div class="d-flex justify-space-between mb-2">
                            <span>MySQL</span>
                            <span>80%</span>
                        </div>

                        <v-progress-linear
                            model-value="80"
                            color="primary"
                            height="8"
                            rounded
                        />
                        </div>

                        <div class="mb-5">
                        <div class="d-flex justify-space-between mb-2">
                            <span>Vue.js</span>
                            <span>65%</span>
                        </div>

                        <v-progress-linear
                            model-value="65"
                            color="primary"
                            height="8"
                            rounded
                        />
                        </div>
                    </v-col>
                </v-row>
            <p class="font-weight-light ma-4">Concepts & methodologies</p>
            <v-row class="ml-3">
                <v-chip size="small" class="mt-1" color="primary">OODD</v-chip>
                <v-chip size="small" class="mt-1" color="primary">Unit Testing</v-chip>
                <v-chip size="small" class="mt-1" color="primary">CI/CD Pipeline</v-chip>
                <v-chip size="small" class="mt-1" color="primary">System Architecture</v-chip>
            </v-row>
            </v-card>
    
    </v-container>
    <v-container>
            <v-row>
                <v-col >
                    <p class="text-headline-small font-weight-bold"><v-icon icon="mdi-folder-open"></v-icon>Featured Projects</p>
                </v-col>
                <v-spacer></v-spacer>
                <v-col>
                    <v-chip size="small" class="mt-1" color="primary" variant="flat">All</v-chip>
                
                    <v-chip size="small" class="mt-1" color="primary">Web App</v-chip>
                
                    <v-chip size="small" class="mt-1" color="primary">Full Stack</v-chip>
                </v-col>

    
    <v-row>

    
      <v-col cols="12" md="4">
        <v-card elevation="2">

          <v-img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGgLbGzGpky974mVSrtZOGm4jzUeaLUUwt3wUHhrzD6w&s=10"
            height="200"
            cover
          />

          <v-card-title>
            DevMetrics Analytics Platform
          </v-card-title>

          <v-card-text>
            Real-time developer productivity tracker featrung vue3.Vuetify components.

            <div class="d-flex flex-wrap ga-2 mt-4">
              <v-chip color="primary" size="small">
                Vue.js
              </v-chip>

              <v-chip color="primary" size="small">
                PHP
              </v-chip>

              <v-chip color="primary" size="small">
                MySQL
              </v-chip>
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary" variant="flat">
              View Project
            </v-btn>

            <v-btn variant="outlined">
              Source Code
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-col>

      
      <v-col cols="12" md="4">
        <v-card rounded="lg" elevation="2">

          <v-img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGgLbGzGpky974mVSrtZOGm4jzUeaLUUwt3wUHhrzD6w&s=10"
            height="200"
            cover
          />

          <v-card-title>
            AlgoVisualizer Engine
          </v-card-title>

          <v-card-text>
             Real-time developer productivity tracker featrung vue3.Vuetify components.


            <div class="d-flex flex-wrap ga-2 mt-4">
              <v-chip color="primary" size="small">
                HTML
              </v-chip>

              <v-chip color="primary" size="small">
                CSS
              </v-chip>

              <v-chip color="primary" size="small">
                JavaScript
              </v-chip>
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary" variant="flat">
              View Project
            </v-btn>

            <v-btn variant="outlined">
              Source Code
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-col>

      
      <v-col cols="12" md="4">
        <v-card rounded="lg" elevation="2">

          <v-img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGgLbGzGpky974mVSrtZOGm4jzUeaLUUwt3wUHhrzD6w&s=10"
            height="200"
            cover
          />

          <v-card-title>
            Lightweight Key-Value Store
          </v-card-title>

          <v-card-text>
            Real-time developer productivity tracker featrung vue3.Vuetify components.


            <div class="d-flex flex-wrap ga-2 mt-4">
              <v-chip color="primary" size="small">
                C#
              </v-chip>

              <v-chip color="primary" size="small">
                SQL Server
              </v-chip>
            </div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary" variant="flat">
              View Project
            </v-btn>

            <v-btn variant="outlined">
              Source Code
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>
</v-row>
</v-container>

<v-container>
    <p class="text-text-headline-medium font-weight-bold"><v-icon icon="mdi-chart-line-variant"/>Education and Experience</p>
    <v-card>
    <v-timeline align="start" class="mt-3">
    <v-timeline-item>
      <template class="color:blue" v-slot:opposite>
        Sep 2024-Present
      </template>
      <v-card class="mr-3">
        <div class="text-title-large">Computer Science Peer Tutor/Teaching Assistant</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </v-card>
    </v-timeline-item>
    <v-timeline-item>
      <template v-slot:opposite>
            <v-card class="mr-3">
            <div class="text-title-large">Open Source Fellowship Contributor</div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </v-card>
      </template>
      May2024/Aug2024
      
    </v-timeline-item>
    <v-timeline-item>
      <template v-slot:opposite>
        2022-2026Exp.
      </template>
      <v-card class="mr-3">
        <div class="text-title-large">B.S in computer science</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </v-card>
    </v-timeline-item>
  </v-timeline class="mb-3">
  </v-card>
</v-container>

<v-container>
    <p class="text-headline-small font-weight-bold"><v-icon icon="mdi-email"></v-icon>Contact</p>
    
    <v-row align="center">
        <v-col cols="12" md="6">
            <v-card class="pa-5 text-center" rounded="lg" elevation="2">
                <div class="text-left">
                    <h3>Ready to contribute</h3>
                    <p>I am actively seeking a Software Engineering/Full Stack Developer Internship
                        for summer 2025/2026. Feel free to rach out directly via email or Linkedln.
                    </p>
                    <p><v-icon icon="mdi-email" size="small" color="success"/>alex.rivera.dev@gmail.com</p>
                    <p><v-icon icon="mdi-phone" size="small" color="success"/>09-666655246</p>
                    <p><v-icon icon="mdi-map-marker" size="small" color="success"/>alex.rivera.dev@gmail.com</p>
                    <v-icon icon="mdi-github" size="small"/>
                    <v-icon icon="mdi-linkedin" size="small"/>
                </div>
                
            </v-card>
        </v-col>
        <v-col cols="12" md="6">
            <v-card class="pa-5 text-center" rounded="lg" elevation="2">
                <v-text-field label="Your full name*"></v-text-field>
                <v-text-field label="Email Address*"></v-text-field>
                <v-textarea label="Message/Opportunity Detail"></v-textarea>
                <v-btn>Send Message</v-btn>
            </v-card>
        </v-col>
    </v-row>
  
</v-container>
<v-footer><div class="px-4 py-2 bg- text-center w-100 rounded-lg">
      {{ new Date().getFullYear() }} — <strong></strong>
    </div></v-footer>
</template>
<script setup>
import { ref } from 'vue'
</script>