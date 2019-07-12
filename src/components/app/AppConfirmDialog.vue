<template>
  <v-dialog
    :value="true"
    persistent
  >
    <v-card>
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-card-text>
        {{ message }}
      </v-card-text>
      <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            flat="flat"
            @click="$emit('cancel')"
            data-test="dialog-cancel-btn"
          >
            Cancel
          </v-btn>

          <v-btn
            color="success"
            flat="flat"
            @click="$emit('confirm')"
            data-test="dialog-confirm-btn"
          >
            Confirm
          </v-btn>
        </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  }
}
</script>
