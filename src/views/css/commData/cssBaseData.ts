export const oneLine = ref(`.ellipsis {
    white-space: nowrap; /* 确保文本在一行内显示 */
    overflow: hidden; /* 隐藏超出容器的文本 */
    text-overflow: ellipsis; /* 使用省略符号表示文本被截断 */
}`)

export const twoLine = ref(` .ellipsis-multiline {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; /* 定义文本的行数 */
    overflow: hidden;
    text-overflow: ellipsis;
}`)

export const pHeader = `
.phead{
  display: block;
  position: relative;
  color: #2CD5FF;
  font-weight: bold;
  cursor: pointer;
  margin-left: 10px;

  &::before{
    position: absolute;
    content: "";
    top: 50%;
    left: -10px;
    width: 4px;
    height: 20px;
    background: red;
    transform: translateY(-50%);
  }
}
`

export const pNext = `
.pnext{
  display: block;
  position: relative;
  color: #2CD5FF;
  font-weight: bold;
  cursor: pointer;
  margin-right: 10px;
  width: fit-content;

  &::after{
    position: absolute;
    content: "";
    top: 50%;
    right: -10px;
    width: 4px;
    height: 20px;
    background: red;
    transform: translateY(-50%);
  }
}`