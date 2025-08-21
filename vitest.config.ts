/// <reference types="vitest"/>
import {defineConfig} from "vite"
import { test } from "vitest"

export default defineConfig({
    test:{
        environment: "jsdom",
        globals: true,
        setupFiles: "tests/setup.ts"
    }
})