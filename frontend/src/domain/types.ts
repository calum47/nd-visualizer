export type SensorFormat = "full-frame" | "aps-c" | "mft";

export type CameraPreset = {
  id: string;
  name: string;
  sensor: SensorFormat;
  baseISO: number;
  noise: {
    iso100Luma: number;   // base noise strength at ISO 100-ish
    isoGrowth: number;    // how aggressively noise grows with ISO
    chromaRatio: number;  // 0..1 chroma vs luma noise
  };
};

export type NdFilter = {
  id: string;
  label: string; // "ND8", "ND64", "VND 2-5 stops"
  stops: number; // for VND you'd store chosen stop value separately (v2)
};

export type ExposureSettings = {
  iso: number;          // e.g., 100, 800
  shutterSec: number;   // e.g., 1/125 = 0.008
  aperture: number;     // f-number, e.g., 2.8
};
