<template>
  <v-dialog
    :value="true"
    persistent
  >
    <v-card>
      <v-card-title>
        Delete task
      </v-card-title>
      <v-card-text>
        Do you want delete <strong>{{ task.name }}</strong>?
      </v-card-text>
      <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            flat="flat"
            @click="$emit('cancel')"
          >
            Cancel
          </v-btn>

          <v-btn
            flat="flat"
            @click="$emit('delete')"
          >
            Delete
          </v-btn>
        </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  }
}
</script>
