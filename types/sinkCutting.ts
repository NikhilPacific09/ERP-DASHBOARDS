export type MachineInfo = {
  machineName: string;
  shift: string;
  operatorName: string;
};

export type SinkCuttingPiece = {
  pieceId: string;
  project: string;
  hasSink: boolean;
  hasPipeCut: boolean;
  shape: string;
  status: string;

  remarks?: string;
};