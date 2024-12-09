<template>
  <div>
    <h3 id="C111" class="titleName">1.点式边框</h3>
    <div class="card-box">
      <div class="top-info top-info1"></div>
      <code-box codeType="css" :code="`border: 8px dotted #99CC00;`"/>
    </div>

    <h3 id="C112" class="titleName">2.双线式边框</h3>
    <div class="card-box">
      <div class="top-info top-info2"></div>
      <code-box codeType="css" :code="`border: 10px double #FF9999;border-radius: 8px;`"/>
    </div>

    <h3 id="C113" class="titleName">3.破折线式边框</h3>
    <div class="card-box">
      <div class="top-info top-info3"></div>
      <code-box codeType="css" :code="`border: 10px double #FF9999;border-radius: 8px;`"/>
    </div>

    <h3 id="C114" class="titleName">4.脊线式边框</h3>
    <div class="card-box">
      <div class="top-info top-info4"></div>
      <code-box codeType="css" :code="textHtml"/>
      <code-box codeType="css" :code="`border: 10px double #FF9999;
border-radius: 8px;`"/>
    </div>

    <h3 id="C115" class="titleName">5.内嵌效果的边框</h3>
    <div class="card-box">
      <div class="top-info top-info5"></div>
      <code-box codeType="css" code="border: 8px inset #2CD5FF;"/>
    </div>

    <h3 id="C116" class="titleName">6.突起效果的边框</h3>
    <div class="card-box">
      <div class="top-info top-info6"></div>
      <code-box codeType="css" code="border: 8px outset #FF6600;"/>
    </div>

    <h3 id="C117" class="titleName">7.闪烁边框</h3>
    <div class="card-box">
      <div class="top-info top-info7"></div>
      <code-box codeType="css" code="border: 4px solid #66ff66;
-webkit-animation: twinkling-66bdec71 2s infinite ease-in-out;"/>
    </div>

    <h3 id="C118" class="titleName">8.滚动线条边框</h3>
    <div class="card-box">
      <div class="top-info top-info8">
        <div class="content"></div>
      </div>
      <p class="html-box">html代码</p>
      <code-box codeType="html" :code="textHtml"/>
      <p class="css-box">css代码</p>
      <code-box codeType="css" code=".box8 {
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
}"/>
    </div>
    <h3 id="C119" class="titleName">9.图片边框</h3>
    <div class="card-box">
      <div class="top-info top-info9">
        ces11111S
      </div>
      <code-box codeType="css" code="color: black;
text-align: center;
padding: 50px;
line-height: 1;
margin: 20px auto;
width: 50% !important;
border: 50px solid #fff;
// 170 是切割量 round 会制动匹配大小
border-image: url(../../../assets/comm/borderimg.jpg) 170 round;
"/>
    </div>
  </div>
</template>

<script setup lang="ts">


const textHtml = `<div class="top-info top-info8">
    <div class="content"></div>
</div>`

</script>

<style scoped lang="scss">
.card-box {
  .top-info {
    margin: 10px auto 20px;
    color: white;
    font-size: 20px;
    text-align: center;
    line-height: 200px;
    box-sizing: border-box;
    width: 30%;
    height: 200px;
  }

  .top-info1 {
    border: 8px dotted #99CC00;
  }

  .top-info2 {
    border: 10px double #FF9999;
    border-radius: 8px;
  }

  .top-info3 {
    border: 8px dashed #666699;
  }

  .top-info4 {
    border: 8px ridge #CC9999;
  }

  .top-info5 {
    border: 8px inset #2CD5FF;
  }

  .top-info6 {
    border: 8px outset #FF6600;
  }

  .top-info7 {
    border: 4px solid #66ff66;
    -webkit-animation: twinkling-66bdec71 2s infinite ease-in-out;
  }

  .top-info8 {
    background: repeating-linear-gradient(135deg, transparent, transparent 3px, rgb(228, 161, 85) 3px, rgb(240, 118, 118) 8px);
    animation: shine 1s infinite linear;
    overflow: hidden;

    .content {
      width: calc(100% - 12px) !important;
      height: calc(100% - 12px) !important;
      box-sizing: border-box;
      margin: 6px;
      background-color: #010629;
    }
  }

  .top-info9{
    color: black;
    text-align: center;
    padding: 50px;
    line-height: 1;
    margin: 20px auto;
    width: 50% !important;
    border: 50px solid #fff;
    // 170 是切割量 round 会制动匹配大小
    border-image: url(../../../assets/comm/borderimg.jpg) 170 round;
  }
}

</style>
