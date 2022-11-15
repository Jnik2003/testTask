<template>
  <v-app>
    <v-main>
      <v-container>
        <div class="box">
          <tags-box :tags="tags" :align="alignWidth" />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TagsBox from "@/components/TagsBox.vue";
export default {
  name: "App",
  components: { TagsBox },

  data() {
    return {
      tags: [
        { icon: "mdi-star", text: "5" },
        { icon: "", text: "Обзорная" },
        { icon: "mdi-bus", text: "На автобусе" },
        { icon: "", text: "25 марта" },
        { icon: "mdi-clock-outline", text: "6 часов" },
      ],
      alignLeft: "flex-start",
      alignWidth: "space-between",
    };
  },
};
</script>
<style lang="scss" scoped>
html,
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  padding: 0;
}
.box {
  max-width: 700px;
  width: 100%;
  margin: 20px 0;
}
</style>
