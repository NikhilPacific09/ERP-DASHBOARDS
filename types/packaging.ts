export type PackagingPiece = {
  pieceId: string;
  project: string;
  slab: string;
  shapeType: string;
  length: number;
  width: number;
};

export type PackageItem = {
  packageCode: string;
  piecesCount: number;
  createdDate: string;
  remarks?: string;
};