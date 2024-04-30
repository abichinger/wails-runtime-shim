import { defineConfig, mergeConfig } from "vite";
import wailsConfig from "./.wails/vite.config"

const config = defineConfig({
    // Your vite configuration goes here
})

export default mergeConfig(config, wailsConfig)