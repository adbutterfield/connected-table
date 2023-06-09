import Form from "../../components/Form";
import ConnectedTable from "../../components/ConnectedTable";
import columns from "./columns";
import { fetchData, getDataFromResponse } from "../../api/pokemon";

export default function App() {
  return (
    <>
      <Form />
      <ConnectedTable<Pokemon, PokeapiResponse>
        columns={columns}
        fetchData={fetchData}
        getDataFromResponse={getDataFromResponse}
      />
    </>
  );
}
