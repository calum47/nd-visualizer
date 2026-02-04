import { ExposureSettings } from "../domain/types";

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
        <input
          type="number"
          value={exposure.iso}
          step={100}
          min={100}
          onChange={e =>
            onExposureChange({ ...exposure, iso: Number(e.target.value) })
          }
        />
      </label>

      <label>
        Aperture (f/)
        <input
          type="number"
          value={exposure.aperture}
          step={0.1}
          min={1.2}
          onChange={e =>
            onExposureChange({ ...exposure, aperture: Number(e.target.value) })
          }
        />
      </label>

      <label>
        ND Stops
        <input
          type="number"
          value={ndStops}
          min={0}
          max={10}
          onChange={e => onNdChange(Number(e.target.value))}
        />
      </label>
    </div>
  );
}
