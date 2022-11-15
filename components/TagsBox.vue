<template>
  <div class="tags-box" :class="alignFlex" v-hide v-if="isMounted">
    <tags-item v-for="(tag, ind) in tags" :key="ind" :tag="tag" :ind="ind" />
  </div>
</template>

<script>
import TagsItem from "@/components/TagsItem.vue";

export default {
  name: "TagsBox",
  components: { TagsItem },
  data() {
    return {
      isMounted: false,
    };
  },
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
  methods: {    
  },
  computed: {
    alignFlex() {
      return {
        alignLeft: this.align === "flex-start",
        alignWidth: this.align === "space-between",
      };
    },
  },
  mounted() {
    this.isMounted = true;
  },
};
</script>

<style lang="scss" scoped>
.tags-box {
  width: 100%;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid red;
}

.alignWidth {
  justify-content: space-between;
}
</style>
