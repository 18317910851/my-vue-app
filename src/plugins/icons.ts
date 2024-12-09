import type {App} from "vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import codeBox from "@/components/codeBox/codeBox.vue"
import boxLineInfo from "@/components/comm/boxLineInfo.vue"
import leftComm from "@/components/comm/leftComm.vue"
//全局对象
const allGloablComponent = {codeBox, boxLineInfo, leftComm};

// 注册所有图标
export function setupElIcons(app: App<Element>) {
    Object.entries(allGloablComponent).forEach(([key, value]) => {
        app.component(key, value);
    });
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component);
    }
}
