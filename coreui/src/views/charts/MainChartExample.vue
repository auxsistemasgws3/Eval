<template>
  <CChartLine :datasets="items" :options="defaultOptions" :labels="months" />
</template>

<script>
import axios from "axios";
import { CChartLine } from "@coreui/vue-chartjs";
import { getStyle, hexToRgba, hexToRgb } from "@coreui/utils/src";

export default {
  name: "MainChartExample",
  components: {
    CChartLine,
  },
  computed: {
    
    defaultOptions() {
      return {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },

        scales: {
          y: {
            // defining min and max so hiding the dataset does not change scale range
            min: 0,
            max: 100,
          },
        },
        elements: {
          point: {
            radius: 2,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3,
          },
        },
      };
    },
  },
  data() {
    return {
      area_venta: [],
      months: [],
      items: [],
    };
  },
  methods: {
    index(nombre) {
      let self = this;
      axios
        .get(
          this.$apiAdress +
            "/api/catalogos/ventas?token=" +
            localStorage.getItem("api_token")
        )
        .then(function (response) {
          self.months = response.data.months.map((item) => {
            return item.text;
          });
          self.dataFormat(nombre, response.data);
        })
        .catch(function (error) {
          if (error.response.status !== 401) {
            self.$toast.error(self.$t("messages.error"));
          }
        });
    },
    dataFormat(type, data) {
      let self = this;
      self.items=[];
      if (type == "Area ventas") {
        let areasVentas = data.areas_ventas;
        for (let i = 0; i < areasVentas.length; i++) {
          self.items[i] = {
            label: areasVentas[i].text,
            backgroundColor: "transparent",
            borderColor: hexToRgb(areasVentas[i].aux, 10),
            pointBackgroundColor: hexToRgb(areasVentas[i].aux, 5),
            pointHoverBackgroundColor: areasVentas[i].aux,
            borderWidth: 1,
            data: [],
            fill: false,
            //  tension: 0.5
          };
          for (let j = 0; j < areasVentas[i].month.length; j++) {
            self.items[i].data.push(areasVentas[i].month[j].data);
          }
        }
      } else {
        let areasVentas = data.usuario_ventas;
        for (let i = 0; i < areasVentas.length; i++) {
          let color =self.randomColor();
          self.items[i] = {
            label: areasVentas[i].name,
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: hexToRgb(color, 10),
            pointBackgroundColor: hexToRgb(color, 5),
            pointHoverBackgroundColor: color,
            data: [],
            fill: false,
            //  tension: 0.5
          };
          for (let j = 0; j < areasVentas[i].ventas_month.length; j++) {
            self.items[i].data.push(areasVentas[i].ventas_month[j].data);
          }
        }
      }
    },
    randomColor(){
      return '#'+Math.floor(Math.random()*16777215).toString(16);
    },
    color(value) {
      let $color;
      switch (value) {
        case "primary":
          $color = "#321fdb";
          break;
        case "secondary":
          $color = "#ced2d8";
          break;
        case "success":
          $color = "#009d80";
          break;
        case "info":
          $color = "#39f";
          break;
        case "warning":
          $color = "#f9b115";
          break;
        case "danger":
          $color = "#e55353";
          break;
        case "light":
          $color = "#ebedef";
          break;
        case "dark":
          $color = "#636f83";
          break;
      }
      return $color;
    },
  },
  mounted: function () {
    this.index("Area ventas");
  },
};
</script>
