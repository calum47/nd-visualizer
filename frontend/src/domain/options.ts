export const ISO_OPTIONS = [100, 200, 400, 800, 1600, 3200, 6400, 12800] as const;

export const APERTURE_OPTIONS = [
  1.4, 2.0, 2.8, 4.0, 5.6, 8.0, 11, 16
] as const;

// seconds
export const SHUTTER_OPTIONS = [
  1/4000, 1/2000, 1/1000, 1/500, 1/250, 1/125, 1/60, 1/30, 1/15, 1/8, 1/4, 1/2, 1, 2
] as const;
