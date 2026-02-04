import { ExposureSettings } from "./types";

function log2(x: number): number {
  return Math.log(x) / Math.log(2);
}

export function stopsFromISO(baseISO: number, nextISO: number): number {
  return log2(nextISO / baseISO);
}

export function stopsFromShutter(base: number, next: number): number {
  return log2(next / base);
}

export function stopsFromAperture(base: number, next: number): number {
  return log2((base * base) / (next * next));
}

export function solveShutterForConstantExposure(
  base: ExposureSettings,
  next: ExposureSettings,
  ndStops: number
): number {
  const isoStops = stopsFromISO(base.iso, next.iso);
  const apertureStops = stopsFromAperture(base.aperture, next.aperture);

  const neededShutterStops = ndStops - isoStops - apertureStops;
  return base.shutterSec * Math.pow(2, neededShutterStops);
}
