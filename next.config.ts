import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // experimental: {
  //   reactCompiler: true,
  // },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    // Permite usar SVGs como placeholders del hero en /public/img.
    // Endurecemos con CSP para que ningún SVG remoto pueda ejecutar scripts.
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
