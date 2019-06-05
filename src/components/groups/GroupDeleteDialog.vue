<template>
  <v-dialog
    :value="true"
    persistent
  >
    <v-card>
      <v-card-title>
        Delete group
      </v-card-title>
      <v-card-text>
        Do you want delete <strong>{{ group.name }}</strong>?
      </v-card-text>
      <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            flat="flat"
            @click="$emit('cancel')"
            data-test="cancel-delete-group"
          >
            Cancel
          </v-btn>

          <v-btn
            flat="flat"
            @click="$emit('delete')"
            data-test="confirm-delete-group"
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
    group: {
      type: Object,
      required: true
    }
  }
}
</script>
