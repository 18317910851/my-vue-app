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