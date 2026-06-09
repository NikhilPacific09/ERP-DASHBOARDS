export type ManagerStat = {
  title: string;
  value: number;
};

export type ProductionStage = {
  name: string;
  pending: number;
  completed: number;
};

export type Project = {
  projectCode: string;
  customer: string;
  pieces: number;
  createdDate: string;
  status: string;
};