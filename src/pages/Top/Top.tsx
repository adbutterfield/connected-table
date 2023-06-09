import Form from "../../components/Form";
import ConnectedTable from "../../components/ConnectedTable";
import columns from "./columns";
import { getPokemon, getDataFromResponse } from "../../api/pokemon";

export default function App() {
  return (
    <>
      <Form />
      <ConnectedTable<Pokemon, PokeapiResponse>
        columns={columns}
        fetchData={getPokemon}
        getDataFromResponse={getDataFromResponse}
        queryKey="get-pokemon"
      />
    </>
  );
}
