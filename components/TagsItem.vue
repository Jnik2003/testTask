<template>
  
    <div class="tags-box__item">
      <v-icon class="tags-box__delimeter" v-if="ind != 0">{{
        "mdi-circle-medium"
      }}</v-icon>
      <v-chip class="tags-box__chip" color="primary" text-color="white">
        <v-icon class="tag-box__icon">{{ tag.icon }}</v-icon>
        <div class="tag-box__text">{{ tag.text }}</div>
      </v-chip>
    
  </div>
</template>

<script>
export default {
  name: "TagsItem",
  components: {},
  props: {
    tag: {
      type: Object,
      default: () => {},
    },
    ind: {
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>
.tags-box__item {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
}
.tag-box__icon {
  margin-right: 5px;
}

.tags-box__chip {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
