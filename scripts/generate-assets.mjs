import sharp from "sharp";

const heroSource = "assets/source/bg_hero.png";

await Promise.all([
  sharp(heroSource)
    .resize({ width: 960, withoutEnlargement: true })
    .avif({ quality: 58, effort: 6 })
    .toFile("public/bg-hero-mobile.avif"),
  sharp(heroSource)
    .resize({ width: 960, withoutEnlargement: true })
    .webp({ quality: 68, effort: 6 })
    .toFile("public/bg-hero-mobile.webp"),
  sharp(heroSource)
    .resize({ width: 2400, withoutEnlargement: true })
    .avif({ quality: 58, effort: 6 })
    .toFile("public/bg-hero-desktop.avif"),
  sharp(heroSource)
    .resize({ width: 2400, withoutEnlargement: true })
    .webp({ quality: 68, effort: 6 })
    .toFile("public/bg-hero-desktop.webp"),
]);

const partnerSlugs = [
  "sheila-alves",
  "pietra-pimentel",
];

await Promise.all(
  partnerSlugs.map((slug) =>
    sharp(`assets/source/partners/${slug}.jpg`)
      .resize(720, 720, { fit: "cover", position: "attention" })
      .avif({ quality: 62, effort: 6 })
      .toFile(`public/partners/${slug}.avif`),
  ),
);

const socialBackground = Buffer.from(`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#5D1B1B"/>
        <stop offset="1" stop-color="#5D1B1B"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#g)"/>
    <rect x="0" y="0" width="1200" height="10" fill="#FFBE40"/>
    <rect x="0" y="620" width="1200" height="10" fill="#88530D"/>
  </svg>
`);

const socialLogo = await sharp("public/Logo_Alves_E_Pimentel.svg")
  .resize({ width: 720 })
  .png()
  .toBuffer();

await sharp(socialBackground)
  .composite([{ input: socialLogo, gravity: "centre" }])
  .png({ compressionLevel: 9 })
  .toFile("public/opengraph-image.png");

const appleIcon = Buffer.from(`
  <svg width="180" height="180" xmlns="http://www.w3.org/2000/svg">
    <rect width="180" height="180" rx="36" fill="#5D1B1B"/>
    <text x="90" y="108" fill="#FFBE40" font-size="62" font-family="Georgia,serif" text-anchor="middle">A&amp;P</text>
  </svg>
`);

await sharp(appleIcon)
  .png({ compressionLevel: 9 })
  .toFile("public/apple-touch-icon.png");

console.log(
  "Responsive hero, partner, Open Graph and Apple Touch assets generated.",
);
