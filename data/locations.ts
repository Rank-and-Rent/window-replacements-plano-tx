import { LocationItem } from "./types";

export const locationsData: LocationItem[] = [
  // Primary market
  { slug: "plano-tx", name: "Plano", route: "/locations/plano-tx", type: "city" },
  
  // Major nearby cities
  { slug: "frisco-tx", name: "Frisco", route: "/locations/frisco-tx", type: "city" },
  { slug: "mckinney-tx", name: "McKinney", route: "/locations/mckinney-tx", type: "city" },
  { slug: "allen-tx", name: "Allen", route: "/locations/allen-tx", type: "city" },
  { slug: "richardson-tx", name: "Richardson", route: "/locations/richardson-tx", type: "city" },
  { slug: "dallas-tx", name: "Dallas", route: "/locations/dallas-tx", type: "city" },
  { slug: "carrollton-tx", name: "Carrollton", route: "/locations/carrollton-tx", type: "city" },
  { slug: "farmers-branch-tx", name: "Farmers Branch", route: "/locations/farmers-branch-tx", type: "city" },
  { slug: "addison-tx", name: "Addison", route: "/locations/addison-tx", type: "city" },
  { slug: "coppell-tx", name: "Coppell", route: "/locations/coppell-tx", type: "city" },
  { slug: "lewisville-tx", name: "Lewisville", route: "/locations/lewisville-tx", type: "city" },
  { slug: "the-colony-tx", name: "The Colony", route: "/locations/the-colony-tx", type: "city" },
  { slug: "little-elm-tx", name: "Little Elm", route: "/locations/little-elm-tx", type: "city" },
  { slug: "prosper-tx", name: "Prosper", route: "/locations/prosper-tx", type: "city" },
  { slug: "celina-tx", name: "Celina", route: "/locations/celina-tx", type: "city" },
  { slug: "wylie-tx", name: "Wylie", route: "/locations/wylie-tx", type: "city" },
  { slug: "murphy-tx", name: "Murphy", route: "/locations/murphy-tx", type: "city" },
  { slug: "parker-tx", name: "Parker", route: "/locations/parker-tx", type: "city" },
  { slug: "lucas-tx", name: "Lucas", route: "/locations/lucas-tx", type: "city" },
  { slug: "fairview-tx", name: "Fairview", route: "/locations/fairview-tx", type: "city" },
  { slug: "sachse-tx", name: "Sachse", route: "/locations/sachse-tx", type: "city" },
  { slug: "garland-tx", name: "Garland", route: "/locations/garland-tx", type: "city" },
  { slug: "rowlett-tx", name: "Rowlett", route: "/locations/rowlett-tx", type: "city" },
  { slug: "irving-tx", name: "Irving", route: "/locations/irving-tx", type: "city" },
  { slug: "anna-tx", name: "Anna", route: "/locations/anna-tx", type: "city" },
  
  // Plano neighborhoods and districts
  { slug: "west-plano-tx", name: "West Plano", parent: "plano-tx", route: "/locations/west-plano-tx", type: "neighborhood" },
  { slug: "east-plano-tx", name: "East Plano", parent: "plano-tx", route: "/locations/east-plano-tx", type: "neighborhood" },
  { slug: "central-plano-tx", name: "Central Plano", parent: "plano-tx", route: "/locations/central-plano-tx", type: "neighborhood" },
  { slug: "legacy-west-tx", name: "Legacy West", parent: "plano-tx", route: "/locations/legacy-west-tx", type: "district" },
  { slug: "downtown-plano-tx", name: "Downtown Plano", parent: "plano-tx", route: "/locations/downtown-plano-tx", type: "district" },
  { slug: "willow-bend-tx", name: "Willow Bend", parent: "plano-tx", route: "/locations/willow-bend-tx", type: "neighborhood" },
  { slug: "parker-road-tx", name: "Parker Road Corridor", parent: "plano-tx", route: "/locations/parker-road-tx", type: "district" },
  { slug: "legacy-drive-tx", name: "Legacy Drive", parent: "plano-tx", route: "/locations/legacy-drive-tx", type: "district" },
  { slug: "shops-at-legacy-tx", name: "Shops at Legacy", parent: "plano-tx", route: "/locations/shops-at-legacy-tx", type: "district" },
  { slug: "arbor-hills-tx", name: "Arbor Hills", parent: "plano-tx", route: "/locations/arbor-hills-tx", type: "neighborhood" },
];
