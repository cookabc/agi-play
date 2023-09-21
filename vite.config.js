import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import path from 'path'

/**
 * * 项目根路径
 * @descrition 结尾不带/
 */
const getRootPath = () => {
    return path.resolve(process.cwd())
}

/**
 * * 项目src路径
 * @param srcName src目录名称(默认: "src")
 * @descrition 结尾不带斜杠
 */
const getSrcPath = (srcName = 'src') => {
    return path.resolve(getRootPath(), srcName)
}

// https://vitejs.dev/config/
export default defineConfig(() => {
    const rootPath = getRootPath()
    const srcPath = getSrcPath()
    return {
        plugins: [
            vue(),
            Unocss({})
        ],
        resolve: {
            alias: {
                '~': rootPath,
                '@': srcPath
            }
        },
        build: {
            target: 'es2015',
            outDir: 'dist',
            assetsDir: 'static',
            rollupOptions: {
                output: {
                    compact: true,
                    chunkFileNames: 'static/js/[name]-[hash].js',
                    entryFileNames: 'static/js/[name]-[hash].js',
                    assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
                }
            },
            reportCompressedSize: false, // 启用/禁用 gzip 压缩大小报告
            chunkSizeWarningLimit: 1024 // chunk 大小警告的限制（单位kb）
        }
    }
})
