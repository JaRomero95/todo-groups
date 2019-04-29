<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <h1 class="title">
          ToDo-Groups
        </h1>

        <app-breadcrumbs />

        <div class="mb-4" />

        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>
