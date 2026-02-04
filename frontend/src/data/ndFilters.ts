import { NdFilter } from "../domain/types";

export const ND_FILTERS: NdFilter[] = [
  { id: "nd2", label: "ND2 (1 stop)", stops: 1 },
  { id: "nd4", label: "ND4 (2 stops)", stops: 2 },
  { id: "nd8", label: "ND8 (3 stops)", stops: 3 },
  { id: "nd16", label: "ND16 (4 stops)", stops: 4 },
  { id: "nd32", label: "ND32 (5 stops)", stops: 5 },
  { id: "nd64", label: "ND64 (6 stops)", stops: 6 },
  { id: "nd1000", label: "ND1000 (~10 stops)", stops: 10 }
];
