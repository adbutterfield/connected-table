import { useSearchParams } from "react-router-dom";
import Form from "./components/form";
import ConnectedTable from "./components/connected-table";

export default function App() {
  const [searchParams] = useSearchParams();

  return (
    <main className="flex min-h-screen flex-col p-24">
      <Form />
      <ConnectedTable searchParams={searchParams} />
    </main>
  );
}
