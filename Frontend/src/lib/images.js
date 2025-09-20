const imageModules = import.meta.glob(
  "../assets/images/**/*.{png,jpg,jpeg,svg,webp}",
  {
    eager: true,
    import: "default",
  }
);

const IMAGES = {};

for (const fullPath in imageModules) {
  const imageUrl = imageModules[fullPath];

  const cleanedPath = fullPath
    .replace("../assets/images/", "")
    .replace(/\.(png|jpe?g|svg|webp)$/i, "");

  const parts = cleanedPath.split("/");
  let currentLevel = IMAGES;

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];

    if (i === parts.length - 1) {
      currentLevel[part] = imageUrl;
    } else {
      currentLevel[part] = currentLevel[part] || {};
      currentLevel = currentLevel[part];
    }
  }
}

export default IMAGES;
