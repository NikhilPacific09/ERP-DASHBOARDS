

export type FabricatorInfo = {
  fabricatorName: string;
  shift: string;
};

export type FabricationPiece = {
  pieceId: string;
  project: string;
  shapeType: string;
  length: number;
  width: number;
  status: string;

  remarks?: string;
};