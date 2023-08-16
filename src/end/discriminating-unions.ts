import { transportationCollection } from "../mocks";

type TransportationRequest = {
  name: string;
};

type Teleporter = {
  name: string;
  type: TransportationType.Teleporter;
  maximumRange: number;
};

type Plane = {
  name: string;
  type: TransportationType.Plane;
  numSeats: number;
  maximumRange: number;
};

type Train = {
  name: string;
  type: TransportationType.Train;
  connections: string[];
  numSeats: number;
};

type Car = {
  name: string;
  type: TransportationType.Car;
  numDoors: number;
  vehicleType: VehicleType;
};

export type Transportation = Car | Train | Plane | Teleporter;
type TransportationResponse = Transportation[];

const getTransportation = (
  searchParam: TransportationRequest
): TransportationResponse => {
  const searchResults = transportationCollection.filter((t) =>
    t.name.includes(searchParam.name.toLocaleLowerCase())
  );
  return searchResults;
};

export default getTransportation;
