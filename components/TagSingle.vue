<template>
  <div class="tag-box__single">
    <v-icon class="tag-box__icon" v-if="tag.delimeter">
      {{tag.delimeter}}
    </v-icon>
    <v-chip color="primary" text-color="white">
      <v-icon class="tag-box__icon" v-if="tag.icon">{{ tag.icon }}</v-icon>
      <div class="tag-box__value">{{ tag.value }}</div>
    </v-chip>
  </div>
</template>

<script>
export default {
  name: "TagSingle",
  props: {
    tag: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.tag-box__single {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  overflow-y: hidden;
  flex-wrap: nowrap;
  // flex-shrink: 0;
}
</style>
