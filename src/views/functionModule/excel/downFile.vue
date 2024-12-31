<template>
  <h5 style="margin: 10px 0;">方式一：前端下载处理</h5>
  <el-button type="primary" @click="getExportData">下载</el-button>
  <code-box  codeType="vue" :code="codeExcelDown"></code-box>
  <code-box  codeType="js" :code="codeExcelDownJs"></code-box>
</template>

<script setup lang="ts">
import {onMounted} from 'vue';
import * as XLSX from 'xlsx'
import {saveAs} from 'file-saver';
import _ from 'lodash'
import {codeExcelDown, codeExcelDownJs} from './commCode/dataInfo'

let column = [
  ['姓名', "name"],
  ['年龄', "age"]
]
const datalist = [
  {
    name: 'John',
    age: 25
  }, {
    name: "mark",
    age: 26
  }
]

function spArr(arr, num) { //arr是你要分割的数组，num是以几个为一组
  let newArr = [] //首先创建一个新的空数组。用来存放分割好的数组
  for (let i = 0; i < arr.length;) { //注意：这里与for循环不太一样的是，没有i++
    newArr.push(arr.slice(i, i += num));
  }
  return newArr
}

function saveToFile(wbout, name) {
  saveAs(new Blob([wbout], {type: 'application/octet-stream'}), `${name}.xlsx`);
}

const getExportData = () => {
  const data = [column.map(col => col[0])];  // 获取到表头
  let res_data = datalist
  res_data.forEach((res) => {
    if (!_.isObject(res)) {
      return;
    }

    const row = [];
    column.forEach((col, index) => {
      const key = col[1];
      if (typeof key === 'string') {
        // ['优惠券编号', "id"]
        if (_.has(res, key)) {
          row[index] = res[key];
        }
      } else if (_.isArray(key)) {
        // ['可用天数', ['availableDay', "天","description"]]
        row[index] = '';
        key.forEach(colItem => {
          if (_.has(res, colItem)) {
            row[index] += res[colItem];
          } else {
            row[index] += colItem;
          }
        });
      } else if (_.isObject(key)) {
        const filed = key.key;
        if (_.has(res, filed)) {
          row[index] = key.handler(res[filed]);
        }
      }
    });
    data.push(row);
  })
  console.log("data", data);

  const wb = XLSX.utils.book_new();
  const wopts = {bookType: 'xlsx', bookSST: false, type: 'array'};
  let ws = null
  if (data.length > 5000) {
    let spliceArr = spArr(data, 5000)
    // console.log(spliceArr)
    ws = XLSX.utils.aoa_to_sheet(spliceArr[0]);
    for (let i = 1; i < spliceArr.length; i++) {
      // console.log(i,spliceArr[i])
      XLSX.utils.sheet_add_aoa(ws, spliceArr[i], {origin: -1});
    }
    // console.log(wb)
  } else {
    ws = XLSX.utils.aoa_to_sheet(data);
  }
  XLSX.utils.book_append_sheet(wb, ws, 'sheel0');

  saveToFile(XLSX.write(wb, wopts), "ces")
}


onMounted(() => {
  console.log("00000");
})
</script>

<style scoped>

</style>
