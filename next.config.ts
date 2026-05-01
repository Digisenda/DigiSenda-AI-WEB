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
    // Sin remotePatterns — todas las imágenes son locales en /public/img/.
    // (Se puede añadir si en el futuro se usan CDN externos).
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
