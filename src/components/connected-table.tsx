import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import Table from "./table";

const baseURL = "https://pokeapi.co/api/v2";

type Pokemon = {
  name: string;
  url: string;
};

type PokeapiResponse = {
  count: number;
  next: string;
  previous: null;
  results: Pokemon[];
};

const fetchData = async (
  searchParams?: URLSearchParams
): Promise<PokeapiResponse> => {
  const res = await fetch(
    `${baseURL}/pokemon${searchParams ? `?${searchParams?.toString()}` : ""}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const ConnectedTable: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [localData, setLocalData] = useState<Pokemon[] | null>(null);

  const { data } = useQuery<PokeapiResponse>(
    [`table-data-${searchParams?.toString()}`],
    () => fetchData(searchParams)
  );

  useEffect(() => {
    if (data?.results) setLocalData(data.results);
  }, [data]);

  return <Table data={localData} />;
};

export default ConnectedTable;
