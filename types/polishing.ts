export type MachineInfo = {
  machineName: string;
  shift: string;
  operatorName: string;
};



export type PolishingPiece = {
  pieceId: string;
  project: string;
  shapeType: string;
  length: number;
  width: number;
  status: string;
  startTime: string;
  endTime: string;

  remarks?: string;
};