// next.config.ts
import type { NextConfig } from "next";
 
const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    viewTransition: true
  }
};
 
export default nextConfig;
 
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();