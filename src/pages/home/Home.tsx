import { Table } from "./components/Table";
import { Candidate } from "./interfaces/candidate.interface";
import { fetchCandidates } from "./services/fetchCandidates";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export const Home = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const fetchedCandidates = await fetchCandidates();
      setCandidates(fetchedCandidates);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col">
      <div>
        <h1 className="pt-16 px-10">Bienvenido a "Elecciones Online"</h1>
      </div>
      <div className="flex flex-col justify-center items-center my-20">
        <Table candidates={candidates} />
        <div className="flex justify-start w-full px-10 py-20">
          <Link
            to="/login"
            className=" text-[rgb(13,110,253)] p-3 bg-gray-200 rounded-lg underline hover:bg-gray-300"
          >
            Iniciar Sesion
          </Link>
        </div>
      </div>
    </div>
  );
};
