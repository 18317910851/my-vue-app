import {setupElIcons} from "./icons";
import type {App} from "vue";
import router from '@/router/index';
import {setupStore} from "@/store";

export default {
    install(app: App<Element>) {
        // 将 router 设置为全局属性
        app.config.globalProperties.$router = router;
        // Element-plus图标
        setupElIcons(app);
        // 状态管理(store)
        setupStore(app)
        app.use(router);
    },
}
