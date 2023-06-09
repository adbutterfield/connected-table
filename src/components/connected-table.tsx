import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Table from "./table";

const baseURL = "https://pokeapi.co/api/v2";

type PokeapiResponse = {
  count: number;
  next: string;
  previous: null;
  results: {
    name: string;
    url: string;
  }[];
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

type ConnectedTableProps = {
  searchParams?: URLSearchParams;
};

const ConnectedTable: React.FC<ConnectedTableProps> = ({ searchParams }) => {
  const [localData, setLocalData] = useState<
    | {
        name: string;
        url: string;
      }[]
    | null
  >(null);

  const { data } = useQuery<PokeapiResponse>(
    [`table-data-${searchParams?.toString()}`],
    () => fetchData(searchParams),
    {
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (data?.results) setLocalData(data.results);
  }, [data]);

  return <Table data={localData} />;
};

export default ConnectedTable;
