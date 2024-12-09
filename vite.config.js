import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 可视化vite打包
import { visualizer } from 'rollup-plugin-visualizer';
// gzip压缩
import compression from 'vite-plugin-compression'
// 引入cdn
import cdn from 'vite-plugin-cdn-import'


const pathSrc = resolve(__dirname, "src");
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports: ["vue", "@vueuse/core", "pinia", "vue-router"],
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        visualizer({
            open: true, //在默认用户代理中打开生成的文件
            gzipSize: true, // 收集 gzip 大小并将其显示
            brotliSize: true, // 收集 brotli 大小并将其显示
            filename: "stats.html", // 分析图生成的文件名
        }),
        cdn({
            modules: [
                {
                    name: "lodash",
                    var: "_",  // 根据main.ts中,导入的名称
                    path: "https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.core.js",
                }
            ]
        }),
        compression({
            algorithm: "gzip", // 指定压缩算法为gzip,[ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw']
            ext: ".gz", // 指定压缩后的文件扩展名为.gz
            threshold: 10240, // 仅对文件大小大于threshold的文件进行压缩，默认为10KB
            deleteOriginFile: false, // 是否删除原始文件，默认为false
            filter: /\.(js|css|json|html|ico|svg)(\?.*)?$/i, // 匹配要压缩的文件的正则表达式，默认为匹配.js、.css、.json、.html、.ico和.svg文件
            compressionOptions: { level: 9 }, // 指定gzip压缩级别，默认为9（最高级别）
            verbose: true, //是否在控制台输出压缩结果
            disable: false, //是否禁用插件
        }),
    ],
    resolve: {
        alias: {
            "@": pathSrc,
        },
    },
    base: "./",
    // 构建配置
    build: {
        chunkSizeWarningLimit: 2000, // 消除打包大小超过500kb警告
        minify: "terser", // Vite 2.6.x 以上需要配置 minify: "terser", terserOptions 才能生效
        terserOptions: {
            compress: {
                keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
                drop_console: true, // 生产环境去除 console
                drop_debugger: true, // 生产环境去除 debugger
            },
            format: {
                comments: false, // 删除注释
            },
        },
        rollupOptions: {
            output: {
                // manualChunks: {
                //   "vue-i18n": ["vue-i18n"],
                // },
                // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
                entryFileNames: "s/[name].[hash].js",
                // 用于命名代码拆分时创建的共享块的输出命名
                chunkFileNames: "js/[name].[hash].js",
                // 用于输出静态资源的命名，[ext]表示文件扩展名
                assetFileNames: (assetInfo) => {
                    const info = assetInfo.name.split(".");
                    let extType = info[info.length - 1];
                    // console.log('文件信息', assetInfo.name)
                    if (
                        /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)
                    ) {
                        extType = "media";
                    } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetInfo.name)) {
                        extType = "img";
                    } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
                        extType = "fonts";
                    }
                    return `${extType}/[name].[hash].[ext]`;
                },
            }
        }
    }
})
