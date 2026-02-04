import { formatShutter } from "../utils/format";

type Props = {
  shutterSec: number;
  ndStops: number;
};

export default function Readout({ shutterSec, ndStops }: Props) {
  return (
    <div className="readout">
      <p><strong>ND:</strong> {ndStops} stops</p>
      <p>
        <strong>Recommended shutter:</strong>{" "}
        {formatShutter(shutterSec)}
      </p>
    </div>
  );
}
