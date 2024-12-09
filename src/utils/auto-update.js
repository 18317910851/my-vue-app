let lastSrcs; //上一次获取到的script地址
let needTip = true; // 默认开启提示

const scriptReg = /<script.*src=["'](?<src>[^"']+)/gm;

async function extractNewScripts() {
    // let  url = `//${
    //      window.location.host
    //  }/version?t=${new Date().getTime()}`;
    const html = await fetch('/?_timestamp=' + Date.now()).then((resp) => resp.text());
    scriptReg.lastIndex = 0;
    let result = [];
    let match;
    while ((match = scriptReg.exec(html))) {
        result.push(match.groups.src)
    }
    return result;
}

async function needUpdate() {
    const newScripts = await extractNewScripts();
    if (!lastSrcs) {
        lastSrcs = newScripts;
        return false;
    }
    let result = false;
    if (lastSrcs.length !== newScripts.length) {
        result = true;
    }
    for (let i = 0; i < lastSrcs.length; i++) {
        if (lastSrcs[i] !== newScripts[i]) {
            result = true;
            break
        }
    }
    lastSrcs = newScripts;
    return result;
}

const DURATION = 5000;

export const autoRefresh = () => {
    console.log("11111");
    setTimeout(async () => {
        const willUpdate = await needUpdate();
        if (willUpdate) {
            const result = confirm("页面有更新，请刷新查看");
            if (result) {
                location.reload();
            }
            needTip = false; // 关闭更新提示，防止重复提醒
        }
        if (needTip) {
            autoRefresh();
        }
    }, DURATION)
}
// if (import.meta.env.MODE === "production") {
//     autoRefresh();
// }
//
