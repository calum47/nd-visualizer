import { ExposureSettings } from "../domain/types";
import { ISO_OPTIONS, APERTURE_OPTIONS, SHUTTER_OPTIONS } from "../domain/options";
import { ND_FILTERS } from "../data/ndFilters";
import { formatShutter } from "../utils/format";

type Props = {
  exposure: ExposureSettings;
  ndStops: number;
  onExposureChange: (e: ExposureSettings) => void;
  onNdChange: (stops: number) => void;
};

export default function ControlPanel({
  exposure,
  ndStops,
  onExposureChange,
  onNdChange
}: Props) {
  return (
    <div className="panel">
      <label>
        ISO
        <select
          value={exposure.iso}
          onChange={(e) => onExposureChange({ ...exposure, iso: Number(e.target.value) })}
        >
          {ISO_OPTIONS.map((iso) => (
            <option key={iso} value={iso}>{iso}</option>
          ))}
        </select>
      </label>

      <label>
        Shutter
        <select
          value={exposure.shutterSec}
          onChange={(e) => onExposureChange({ ...exposure, shutterSec: Number(e.target.value) })}
        >
          {SHUTTER_OPTIONS.map((s) => (
            <option key={s} value={s}>{formatShutter(s)}</option>
          ))}
        </select>
      </label>

      <label>
        Aperture
        <select
          value={exposure.aperture}
          onChange={(e) => onExposureChange({ ...exposure, aperture: Number(e.target.value) })}
        >
          {APERTURE_OPTIONS.map((a) => (
            <option key={a} value={a}>f/{a}</option>
          ))}
        </select>
      </label>

      <label>
        ND filter (single)
        <select
          value={ndStops}
          onChange={(e) => onNdChange(Number(e.target.value))}
        >
          <option value={0}>None</option>
          {ND_FILTERS.map((f) => (
            <option key={f.id} value={f.stops}>{f.label}</option>
          ))}
        </select>
      </label>

      <p className="hint">
        Next: we’ll add stacking + variable ND in v2.
      </p>
    </div>
  );
}
