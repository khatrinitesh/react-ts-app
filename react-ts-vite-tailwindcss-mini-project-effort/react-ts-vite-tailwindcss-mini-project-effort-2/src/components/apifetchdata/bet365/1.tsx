import React, { useEffect, useState } from "react";
// COMPONENTS
import { ApiDataBet365 } from "../../../interface/interface";

const ApiComponent = () => {
  const [data, setData] = useState<ApiDataBet365>({
    soccer: [],
    tennis: [],
    basketball: [],
    cricket: [],
    esports: [],
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const apiKey = 'b33c73dbf3msh6cf91065eab6867p177a37jsnbeffe3c0615f'
  const apiUrl = 'bet365-api-inplay.p.rapidapi.com'

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://bet365-api-inplay.p.rapidapi.com/bet365/get_leagues",
        {
          headers: {
            "x-rapidapi-key":
            apiKey,
            "x-rapidapi-host": apiUrl,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result: ApiDataBet365 = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h2 className="text-[32px] text-blue-600 mb-5 font-bold underline">Bet 365</h2>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      <div>
        <h4 className="font-bold text-[red] mb-[10px] text-[20px] underline">1 - Soccer</h4>
        <ul className="shadow p-4 rounded mb-[30px]">
          {data.soccer.map((league, index) => (
            <li key={index}>{league}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-[red] mb-[10px] text-[20px] underline">2 - Tennis</h4>
        <ul className="shadow p-4 rounded mb-[30px]">
          {data.tennis.map((league, index) => (
            <li key={index}>{league}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-[red] mb-[10px] text-[20px] underline">3 - Basketball</h4>
        <ul className="shadow p-4 rounded mb-[30px]">
          {data.basketball.map((league, index) => (
            <li key={index}>{league}</li>
          ))}
        </ul>
      </div>
      <hr />
      <div>
        <h4 className="font-bold text-[red] mb-[10px] text-[20px] underline">4 - Cricket</h4>
        <ul className="shadow p-4 rounded mb-[30px]">
          {data.cricket.map((league, index) => (
            <li key={index}>{league}</li>
          ))}
        </ul>
      </div>
      <hr />
      <div>
        <h4 className="font-bold text-[red] mb-[10px] text-[20px] underline">5 - Esports</h4>
        <ul>
          {data.esports.map((league, index) => (
            <li key={index}>{league}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ApiComponent;
