<template>
  <v-app>
    <v-main>
      <v-container>
        <div class="box-1">
          <tags-box :tags="tags" :align="alignLeft" />
        </div>
        <div class="box-2">
          <tags-box :tags="tags" :align="alignCenter" />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TagsBox from "@/components/TagsBox";
export default {
  name: "App",

  components: { TagsBox },
  data() {
    return {
      tags: {
        rating: {
          icon: "mdi-star",
          delimeter: "",
          value: "5",
        },
        type: {
          icon: "",
          delimeter: "mdi-circle-medium",
          value: "Обзорная",
        },
        transport: {
          icon: "mdi-bus",
          delimeter: "mdi-circle-medium",
          value: "На автобусе",
        },
        date: {
          icon: "",
          delimeter: "mdi-circle-medium",
          value: "25 марта",
        },
        time: {
          icon: "mdi-clock-outline",
          delimeter: "mdi-circle-medium",
          value: "6 часов",
        },
      },
      alignLeft: "flex-start",
      alignCenter: "center",
      
    };
  },
};
</script>
<style>
body, html{
  box-sizing: border-box;
}
.box-1{
  border: 1px solid black;
  margin-bottom: 20px;
  display: flex;
  /* justify-content: flex-start; */
  overflow-y: hidden;
}
.box-2{
  margin-left: 100px;
  border: 1px solid black;
}

</style>
