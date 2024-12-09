<template>
  <div style="  height: calc(100vh - 100px); width: 100%;">
    <div id="map" style="width: 100%; height: 100%;"></div>
  </div>

</template>

<script setup>
import {onMounted, ref} from 'vue';

const map = ref(null);
const points = ref([])
const path = ref([
  [116.368904, 39.923423],
  [116.368904, 39.923423],
]);

const handleMapClick = (e) => {
  const { lnglat } = e;
  console.log("e", e);
  points.value.push(lnglat);

  if (points.value.length >= 2) {
    drawPolyline();
  }
}

const drawPolyline = () => {
  const polyline = new AMap.Polyline({
    path: points.value,
    strokeColor: "#FF33FF",  //线颜色
    strokeOpacity: 1,       //线透明度
    strokeWeight: 3,        //线宽
    strokeStyle: "solid",   //线样式
    strokeDasharray: [10, 5],  //虚线样式
    outlineColor: "#ffeeff",  //轮廓线颜色
    outlineOpacity: 1,       //轮廓线透明度
  });

  map.value.add(polyline);
}

onMounted(() => {
  map.value = new AMap.Map('map', {
    // 缩放比例 - 缩放比例越大，地图就越大，展示的月清晰
    zoom: 15,
    // 地图风格 - 可以修改地址的最后一个单词来使用不同的风格
    // mapStyle: 'amap://styles/whitesmoke',
    center: [116.397428, 39.90923], // 初始化地图中心点
  });

  map.value.on('click', handleMapClick)

  const polyline = new AMap.Polyline({
    path: path.value,
    borderWeight: 2,
    strokeColor: 'blue',
  });

  polyline.setMap(map.value);
});
</script>
