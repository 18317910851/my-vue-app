export const code8 = `
.box8 {
  width: 100%;
  background: repeating-linear-gradient(135deg, transparent, transparent 3px, rgb(228, 161, 85) 3px, rgb(240, 118,
  118) 8px);
  animation: shine 1s infinite linear;
  overflow: hidden;
}

.content {
  width: calc(100% - 12px) !important;
  height: calc(100% - 12px) !important;
  box-sizing: border-box;
  margin: 6px;
  background-color: #010629;
}`

export const textHtml = `<div class="top-info top-info8">
    <div class="content"></div>
</div>`

export const code9 = `
color: black;
text-align: center;
padding: 50px;
line-height: 1;
margin: 20px auto;
width: 50% !important;
border: 50px solid #fff;
// 170 是切割量 round 会制动匹配大小
border-image: url(../../../assets/comm/borderimg.jpg) 170 round;
`