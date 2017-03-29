<template>
    <div id="note-editor">
        <textarea class="form-control"
                  :value="getActiveNote"
                  @input="editNote"
        ></textarea>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getActiveNote'])
  },
  methods: {
    editNote (e) {
      this.$store.dispatch('editNote', e)
    }
  }
}
</script>

<style>
    #note-editor {
        height: 100%;
        margin-left: 380px;
    }

    #note-editor textarea {
        height: 100%;
        border: 0;
        border-radius: 0;
    }
</style>
