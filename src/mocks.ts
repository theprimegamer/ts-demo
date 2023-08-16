import { Transportation } from "./end/discriminating-unions";

export const transportationCollection: Transportation[] = [
  {
    type: TransportationType.Car,
    name: "Green Goblin",
    numDoors: 2,
    vehicleType: VehicleType.Sport,
  },
  {
    type: TransportationType.Car,
    name: "Mystery Machine",
    numDoors: 4,
    vehicleType: VehicleType.Van,
  },
  {
    type: TransportationType.Plane,
    name: "Big Ol' Bus",
    maximumRange: 17_964,
    numSeats: 300,
  },
  {
    type: TransportationType.Plane,
    name: "Maximillion",
    maximumRange: 7_130,
    numSeats: 153,
  },
  {
    type: TransportationType.Teleporter,
    name: "Dimensionator",
    maximumRange: 90_000,
  },
  {
    type: TransportationType.Teleporter,
    name: "Stargate",
    maximumRange: 3_000_000_000,
  },
  {
    type: TransportationType.Train,
    connections: ["Charlottesville", "Baltimore", "Philadelphia"],
    name: "Amtrak",
    numSeats: 290,
  },
  {
    type: TransportationType.Train,
    name: "Union Pacific",
    connections: ["St. Louis", "Cleveland", "Houston", "Chicago"],
    numSeats: 225,
  },
];
