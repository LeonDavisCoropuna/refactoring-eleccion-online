import { Candidate } from "../interfaces/candidate.interface";
import axios from "../../../config/axios";

export const fetchCandidates = async (): Promise<Candidate[]> => {
  try {
    const response = await axios.get("/auth/avegod");
    console.log(response)
    //const candidates: Candidate[] = response.data;
    return [];
  } catch (error) {
    return [
      {
        name: "Aldo",
        lastName: "Martinez",
        username: "aldechi_11",
        job: "Presidente",
        politicalParty: "FreeFap",
      },
      {
        name: "Avelino",
        lastName: "Lupo",
        username: "alupoc_35",
        job: "Presidente",
        politicalParty: "Peru libre",
      },
      {
        name: "Randu",
        lastName: "Cerpa",
        username: "randu56",
        job: "vicePresidente",
        politicalParty: "FreeFap",
      },
      {
        name: "null",
        lastName: "null",
        username: "null",
        job: "null",
        politicalParty: "Nulo",
      },
    ];
  }
};
