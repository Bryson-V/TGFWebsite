"use client";

import dynamic from "next/dynamic";

const StandaloneMap = dynamic(
  () => import("@/components/sections/upcoming/map"),
  { ssr: false, loading: () => <p style={{ textAlign: 'center', padding: '2rem' }}>Loading map...</p> }
);

export default function MapWrapper() {
  return <StandaloneMap />;
}