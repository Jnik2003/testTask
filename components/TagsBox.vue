<template>
  <div class="tag-box" :class="alignFlex">
    <tag-single v-for="(tag, ind) in tags" :key="ind" :tag="tag" />
  </div>
</template>

<script>
import TagSingle from "@/components/TagSingle";
export default {
  name: "TagsBox",
  components: { TagSingle },
  props: {
    tags: {
      type: Object,
      default: () => {},
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
        alignCenter: this.align === "center",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.tag-box {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  overflow: hidden;
  height: 32px;
}

.alignCenter {
  justify-content: center;
}
</style>
