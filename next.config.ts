import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // experimental: {
  //   reactCompiler: true,
  // },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    // Permitimos SVGs locales (placeholders) con CSP estricta.
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Permitimos Unsplash como origen remoto SOLO mientras la imagen del hero
    // sea un placeholder. En producción reemplazar por foto IA o stock propia
    // alojada localmente en /public/img/hero/founder.jpg y eliminar este
    // remotePattern.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
