import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// Resolve the Tailwind config with an absolute path so builds behave the
// same regardless of the process's current working directory (some
// tooling/launchers run Vite with a cwd that isn't this project folder).
const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  plugins: {
    tailwindcss: { config: join(__dirname, "tailwind.config.cjs") },
    autoprefixer: {},
  },
};
