<template>
  <div>
    <h3 id="C111" class="titleName">1.高德地图</h3>
    <boxLineInfo infos="实现点击划线并计算距离"></boxLineInfo>
    <div id="mapContainer" style="width: 100%; height: 300px;"></div>
  </div>

</template>

<script>
import {onMounted, onBeforeUnmount, ref} from 'vue';

export default {
  setup() {
    const map = ref(null);
    const points = ref([]);
    const polyline = ref(null);
    const distanceMarkers = ref([]);

    const initMap = () => {
      map.value = new AMap.Map('mapContainer', {
        zoom: 10,
        center: [116.397428, 39.90923], // 默认中心点
      });

      AMap.event.addListener(map.value, 'click', handleMapClick);
    };

    const handleMapClick = (e) => {
      const point = [e.lnglat.lng, e.lnglat.lat];
      points.value.push(point);

      if (points.value.length >= 2) {
        drawPolylineAndMarkers();
      }
    };

    const drawPolylineAndMarkers = () => {
      // 清除之前的折线和标记
      if (polyline.value) {
        map.value.remove(polyline.value);
      }
      distanceMarkers.value.forEach(marker => map.value.remove(marker));
      distanceMarkers.value = [];

      // 绘制新的折线
      const path = points.value.map(point => new AMap.LngLat(point[0], point[1]));
      polyline.value = new AMap.Polyline({
        path: path,
        strokeColor:'#80d8ff',
        isOutline:true,
        outlineColor:'white'
        // strokeColor: "#FF33FF",
        // strokeOpacity: 1,
        // strokeWeight: 3,
        // strokeStyle: "solid",
      });
      map.value.add(polyline.value);

      // 计算距离并添加标记
      for (let i = 0; i < path.length - 1; i++) {
        console.log("====", path[i], path[i + 1]);
        const distance = AMap.GeometryUtil.distance(path[i], path[i + 1]); // 单位：米
        const startPoint = points.value[i];
        const endPoint = points.value[i + 1];
        const midPoint = [(startPoint[0] + endPoint[0]) / 2, (startPoint[1] + endPoint[1]) / 2]; // 计算中心点位


        // 创建标记并添加到地图上
        const marker = new AMap.Marker({
          position: midPoint,
          map: map.value,
          content: `<div style="background-color: rgba(255, 51, 255, 0.7); border-radius: 5px; padding: 2px 5px;">${distance.toFixed(2)}m</div>`,
          anchor: 'middle', // 锚点位置
          offset: new AMap.Pixel(-(distance.toString().length * 6), -10), // 根据距离长度调整偏移量，这里简单处理，可能需要更精细的算法
          zIndex: 100, // 确保标记在折线上方
        });

        // 添加到数组中以便后续管理
        distanceMarkers.value.push(marker);
      }
    };

    onMounted(() => {
      initMap();
    });

    onBeforeUnmount(() => {
      if (map.value) {
        map.value.destroy();
      }
      // 清除折线和标记（虽然 onBeforeUnmount 时它们应该已经被清除，但这里再次确保）
      if (polyline.value) {
        map.value?.remove(polyline.value);
      }
      distanceMarkers.value.forEach(marker => marker?.setMap(null)); // 或者直接调用 map.remove(marker) 如果它们还在 map 上
    });

    return {};
  },
};
</script>

<style scoped>
#mapContainer {
  width: 100%;
  height: 500px;
}
</style>
