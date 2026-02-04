import { ExposureSettings } from "./types";

export function stopsFromRatio(ratio: number): number {
  // log2(ratio) but safe-ish
  return Math.log(ratio) / Math.log(2);
}

export function stopsFromISO(baseISO: number, newISO: number): number {
  if (baseISO <= 0 || newISO <= 0) throw new Error("ISO must be > 0");
  return stopsFromRatio(newISO / baseISO);
}

export function stopsFromShutter(baseSec: number, newSec: number): number {
  if (baseSec <= 0 || newSec <= 0) throw new Error("Shutter must be > 0");
  return stopsFromRatio(newSec / baseSec);
}

// Aperture relates to area ~ 1/(N^2), so exposure ∝ 1/N^2
export function stopsFromAperture(baseF: number, newF: number): number {
  if (baseF <= 0 || newF <= 0) throw new Error("Aperture must be > 0");
  return stopsFromRatio((baseF * baseF) / (newF * newF));
}

export function totalStopsDelta(base: ExposureSettings, next: ExposureSettings): number {
  return (
    stopsFromISO(base.iso, next.iso) +
    stopsFromShutter(base.shutterSec, next.shutterSec) +
    stopsFromAperture(base.aperture, next.aperture)
  );
}

export function applyNdStops(stopsDeltaFromSettings: number, ndStops: number): number {
  // ND reduces light, so subtract stops
  return stopsDeltaFromSettings - ndStops;
}

// Keep exposure constant by solving for shutterSec
export function solveShutterForConstantExposure(
  base: ExposureSettings,
  next: Omit<ExposureSettings, "shutterSec"> & Partial<Pick<ExposureSettings, "shutterSec">>,
  ndStops: number
): number {
  // We want: totalStopsDelta(base, solvedNext) - ndStops = 0
  // Solve for shutter ratio:
  // stops_shutter = ndStops - (stops_iso + stops_aperture)
  const stopsISO = stopsFromISO(base.iso, next.iso);
  const stopsAperture = stopsFromAperture(base.aperture, next.aperture);
  const neededShutterStops = ndStops - (stopsISO + stopsAperture);

  // shutter ratio = 2^(neededStops)
  const ratio = Math.pow(2, neededShutterStops);
  return base.shutterSec * ratio;
}
