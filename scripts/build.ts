import dts from "bun-plugin-dts";

await Bun.build({
  format: "esm",
  outdir: "./dist",
  entrypoints: ["./src/index.ts"],
  naming: "[dir]/[name].js",
  plugins: [dts({ output: { noBanner: true } })],
  minify: true,
});
