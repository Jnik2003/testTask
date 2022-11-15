<template>
  <div class="tags-box" :class="alignFlex" v-hide>
    <tags-item v-for="(tag, ind) in tags" :key="ind" :tag="tag" :ind="ind" />
  </div>
</template>

<script>
import TagsItem from "@/components/TagsItem.vue";

export default {
  name: "TagsBox",
  components: { TagsItem },
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
    align: {
      type: String,
      default: "left",
    },
  },
  computed: {
    alignFlex() {
      return {
        alignLeft: this.align === "left",
        alignWidth: this.align === "space-between",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.tags-box {
  width: 100%;
  display: inline-flex;
  justify-content: left;
  align-items: center;
}

.alignWidth {
  justify-content: space-between;
}
</style>
