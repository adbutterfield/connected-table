const baseURL = "https://pokeapi.co/api/v2";

export const fetchData: FetchData<PokeapiResponse> = async (
  searchParams?: URLSearchParams
) => {
  const res = await fetch(
    `${baseURL}/pokemon${searchParams ? `?${searchParams?.toString()}` : ""}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const getDataFromResponse = (
  response: PokeapiResponse | undefined
): Pokemon[] | null => {
  if (response?.results) {
    return response.results;
  }
  return null;
};
