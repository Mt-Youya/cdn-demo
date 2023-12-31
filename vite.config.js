import { defineConfig } from "vite"
import { cdn as CDNImport } from "vite-plugin-cdn2"
import { cdnjs } from "vite-plugin-cdn2/resolver/cdnjs"
import AutoImport from "unplugin-auto-import/vite"
import react from "@vitejs/plugin-react-swc"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        AutoImport({
            imports: ["react", "react-router-dom"],
            include: [/\.jsx?$/]
        }),
        CDNImport({
            modules: ["react-dom", "react", "react-router-dom"],
            resolve: cdnjs()
        })
    ]
})
