export const codeExcelUp = `
<div>
    <!-- 文件上传 -->
    <el-upload class="upload-demo" drag :action="''" :show-file-list="false"
      :before-upload="handleBeforeUpload" :on-change="handleFileChange">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">点击或拖拽文件上传</div>
    </el-upload>

    <!-- 表格展示数据 -->
    <el-table :data="tableData" border>
      <el-table-column
        v-for="(column, index) in tableColumns"
        :key="index"
        :label="column"
        :prop="column"
      ></el-table-column>
    </el-table>
  </div>
`

export const codeExcelJs = `
import { ref } from 'vue';  // 引入 Vue 3 的响应式 API
import * as XLSX from 'xlsx';  // 引入 xlsx 库
import { ElMessage } from 'element-plus';  // 引入 ElMessage 提示框


// 响应式数据
const tableData = ref([])  // 存储表格数据
const tableColumns = ref([])  // 存储表头列名

// 上传文件前的钩子函数，检查文件类型
const handleBeforeUpload = (file) => {
  const isExcel =
    file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
    file.type === 'application/vnd.ms-excel';
  if (!isExcel) {
    ElMessage.error('请选择 Excel 文件');
  }
  return isExcel;
}

    // 文件上传后处理函数
const handleFileChange = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target.result;

      // 使用 xlsx 库解析 Excel 文件
      const workbook = XLSX.read(data, { type: 'binary' });

      // 获取工作表（假设读取第一个工作表）
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      // 将工作表转为 JSON 数据
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      if (jsonData.length) {
        // 解析表头（第一行作为列名）
        tableColumns.value = jsonData[0];

        // 解析表格数据（从第二行开始）
        tableData.value = jsonData.slice(1).map((row) => {
          const rowData = {};
          tableColumns.value.forEach((col, index) => {
            rowData[col] = row[index] || ''; // 防止某些单元格为空
          });
          return rowData;
        });
        console.log(tableData.value)
      }
    };
    reader.readAsBinaryString(file.raw); // 读取文件内容
};
`


export const codeExcelDown =
    `<h5 style="margin: 10px 0;">方式一：前端下载处理</h5>
<el-button type="primary" @click="getExportData">下载</el-button>`

export const codeExcelDownJs = `import {onMounted} from 'vue';
import * as XLSX from 'xlsx'
import {saveAs} from 'file-saver';
import _ from 'lodash'

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
  saveAs(new Blob([wbout], {type: 'application/octet-stream'}), \`${name}.xlsx\`);
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
}`