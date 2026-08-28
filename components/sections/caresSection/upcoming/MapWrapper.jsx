"use client";

import dynamic from "next/dynamic";

const StandaloneMap = dynamic(
  () => import("@/components/sections/caresSection/upcoming/map"),
  { ssr: false, loading: () => <p style={{ textAlign: 'center', padding: '2rem' }}>Loading...</p> }
);

export default function MapWrapper() {
  return <StandaloneMap />;
}