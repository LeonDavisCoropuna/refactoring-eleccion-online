import { decodeToken } from "../../utils/decodeToken";
import { useState, useEffect } from "react";
import { Party } from "./interfaces/party.interface";
import { fetchPartys } from "./services/fetchPartys";
export const Votacion = () => {
  const { username } = decodeToken();

  const [partys, setPartys] = useState<Party[]>([]);
  const [selectedParty, setSelectedParty] = useState<number>(0);
  useEffect(() => {
    const fetchData = async () => {
      const fetchedCandidates = await fetchPartys();
      setPartys(fetchedCandidates);
    };
    fetchData();
  }, []);
  return (
    <div className="h-screen px-40 py-20">
      <div className="flex justify-between items-center bg-yellow-400 py-5 px-5">
        <div>Bienvenido {username}</div>
        <div>
          <button className="bg-red-500 px-5 py-1 rounded-md hover:bg-white hover:text-black">
            Salir
          </button>
        </div>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>idPartido</th>
              <th>Logo</th>
              <th>Marcar</th>
            </tr>
          </thead>
          <tbody>
            {partys.map((party) => (
              <tr key={party.id} className={`${selectedParty === party.id ? " bg-slate-700" : ""}`}>
                <td>{party.id}</td>
                <td>
                  <img
                    src={party.logo}
                    alt="party"
                    style={{ width: "80px", height: "80px" }}
                  />
                </td>
                <td>
                  <button
                    className={`w-10 h-10 rounded-full ${
                      selectedParty === party.id ? "bg-green-100" : "bg-black"
                    }`}
                    onClick={() => setSelectedParty(party.id)}
                  ></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>Footer</div>
    </div>
  );
};
