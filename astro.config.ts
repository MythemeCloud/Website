// @ts-nocheck
import worker from "astrojs-service-worker";
import { defineConfig } from "astro/config";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import critters from "astro-critters";
import rome from "astro-rome";

export default defineConfig({
	site: "https://mytheme.cloud",
	experimental: {
		assets: true,
	},
	integrations: [
		import.meta.env.MODE === "production" ? worker() : null,
		sitemap(),
		critters({ logger: 1 }),
		prefetch(),
		rome({ logger: 1 }),
		compress({ logger: 1 }),
	],
	vite: {
		build: {
			sourcemap: true,
		},
	},
});
