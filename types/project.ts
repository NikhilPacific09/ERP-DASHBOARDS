export interface ProjectOperation {
  cutting: boolean;
  polishing: boolean;
  sinkCutting: boolean;
  fabrication: boolean;
  packaging: boolean;
}

export interface ProjectSlab {
  slabCode: string;
  pieceCount: number;
}

export interface ProjectPiece {
  pieceCode: string;
  shape: string;
  length: number;
  width: number;
  status: string;
  slab: string;
}

export interface ProjectDetails {
  id: string;

  projectCode: string;
  customer: string;

  numberOfPieces: number;

  drawing: string;

  remarks: string;

  operations: ProjectOperation;

  slabs: ProjectSlab[];

  pieces: ProjectPiece[];
}