export interface CuttingRecord {
  pieceId: string;
  project: string;
  length: number;
  width: number;
  shapeType: string;
  status: string;
  startTime: string;
  endTime: string;
}

export type NewCuttingRecord = {
  pieceId: string;
  length: number;
  width: number;
  shapeType: string;
  remarks: string;
};