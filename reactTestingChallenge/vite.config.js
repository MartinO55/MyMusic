import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // so we don't need to import describe and it every time
    environment: "jsdom",
    setupFiles: "./config/setup-tests.js",
  },
});
