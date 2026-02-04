import { CameraPreset } from "../domain/types";

export const CAMERAS: CameraPreset[] = [
  {
    id: "ff_modern",
    name: "Full Frame (modern, generic)",
    sensor: "full-frame",
    baseISO: 100,
    noise: { iso100Luma: 0.006, isoGrowth: 1.15, chromaRatio: 0.6 },
  },
  {
    id: "ff_older",
    name: "Full Frame (older, generic)",
    sensor: "full-frame",
    baseISO: 100,
    noise: { iso100Luma: 0.01, isoGrowth: 1.2, chromaRatio: 0.7 },
  },
  {
    id: "apsc_modern",
    name: "APS-C (modern, generic)",
    sensor: "aps-c",
    baseISO: 100,
    noise: { iso100Luma: 0.009, isoGrowth: 1.18, chromaRatio: 0.65 },
  },
  {
    id: "apsc_older",
    name: "APS-C (older, generic)",
    sensor: "aps-c",
    baseISO: 100,
    noise: { iso100Luma: 0.014, isoGrowth: 1.25, chromaRatio: 0.75 },
  },
];
