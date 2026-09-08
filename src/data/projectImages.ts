// Auto-discovers every image in src/assets and maps it by filename, e.g.
// "onelogin.webp" -> resolved asset URL. Drop a new image into src/assets
// and reference its filename from a project's `image` field — no other
// code changes needed.
const modules = import.meta.glob("../assets/*.{webp,png,jpg,jpeg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export const projectImages: Record<string, string> = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => [path.split("/").pop() as string, url]),
);
