// The purspose of this file is to create a mock source list,
// before the real APIs start up.
// To fasilitate the coding process.

import { Source } from "./source";

export const SOURCES: Source[] = [
  {
    id: "80fe6e1e-6f1b-4b3c-957c-275d12bb3e48",
    name: "Redox Memorial Hospital",
    environment: "staging",
    encoding: "utf8",
    created_at: "2019-03-05 21:04:27",
    updated_at: "2019-03-05 21:04:27"
  },
  {
    id: "f7516443-c498-4493-9acc-c854ca2e873a",
    name: "St. Lloyd Children's Hospital",
    environment: "development",
    encoding: "latin1",
    created_at: "2019-03-05 21:04:27",
    updated_at: "2019-03-05 21:04:27"
  },
  {
    id: "4e7cb748-9d37-4705-9d16-bd68a80afc39",
    name: "Chicago University Health System",
    environment: "production",
    encoding: "latin1",
    created_at: "2019-03-05 21:04:27",
    updated_at: "2019-03-05 21:04:27"
  },
  {
    id: "f4f96516-c5ec-43bb-ba21-da1f35dacf8a",
    name: "The Hendrick Institute",
    environment: "development",
    encoding: "utf8",
    created_at: "2019-03-05 21:04:27",
    updated_at: "2019-03-05 21:04:27"
    //,
    //"deleted_at": null
  },
  {
    id: "914d66ba-4368-450a-870b-d8fcd7fd34d6",
    name: "The Downum Center for Advanced Clinical Trials",
    environment: "production",
    encoding: "utf8",
    created_at: "2019-03-05 21:04:27",
    updated_at: "2019-03-05 21:04:27"
    //,
    //"deleted_at": null
  },
  {
    id: "bd5ab29c-af66-44c0-b2e9-f36eee05af97",
    name: "My Health System",
    environment: "production",
    encoding: "latin1",
    created_at: "2019-03-05 21:08:27",
    updated_at: "2019-03-05 21:08:27"
    //,
    //"deleted_at": null
  }
];
