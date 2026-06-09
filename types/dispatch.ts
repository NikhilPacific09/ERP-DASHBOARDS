export type DispatchPackage = {
  packageCode: string;
  piecesCount: number;
  createdDate: string;
};

export type DispatchHistoryItem = {
  packageCode: string;
  vehicleNumber: string;
  driverName: string;
  destination: string;
  dispatchDate: string;
  remarks?: string;
};