<template>
    <div id="toolbar">
        <i class="glyphicon glyphicon-plus" @click="addNote"></i>
        <i class="glyphicon glyphicon-star"></i>
        <i class="glyphicon glyphicon-remove" @click="deleteNote"></i>
    </div>
</template>

<script>
export default {
  methods: {
    addNote () {
      this.$store.dispatch('addNote')
    },
    deleteNote () {
      this.$store.dispatch('deleteNote')
    }
  }
}
</script>

<style>
    #toolbar {
        float: left;
        width: 80px;
        height: 100%;
        background-color: #30414D;
        color: #767676;
        padding: 35px 25px 25px 25px;
    }

    #toolbar i {
        font-size: 30px;
        margin-bottom: 35px;
        cursor: pointer;
        opacity: 0.8;
        transition: opacity 0.5s ease;
    }

    #toolbar i:hover {
        opacity: 1;
    }
</style>
