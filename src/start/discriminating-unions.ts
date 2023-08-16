import { transportationCollection } from "../mocks";

type TransportationRequest = {
  name: string;
};

type Transportation = {
  name: string;
  type: TransportationType;
  wheels?: number;
  numDoors?: number;
  vehicleType?: VehicleType;
  connections?: string[];
  numSeats?: number;
  maximumRange?: number;
};

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
