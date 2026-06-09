export interface CuttingPiece {
  pieceId: string;
  project: string;

  length: number;
  width: number;

  shapeType: string;

  status: string;
}

export interface ProcessCuttingPayload {
  pieceId: string;

  shapeType:
    | "Rectangle"
    | "L Shape"
    | "Curve"
    | "Round"
    | "Custom";

  length: number;
  width: number;

  longLength: number;
  longWidth: number;

  hasSink: boolean;
  hasPipeCut: boolean;
  hasRadius: boolean;
  hasCurve: boolean;

  reverseLayout: boolean;

  remarks: string;
}