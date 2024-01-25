import { useParams } from "react-router";

export default function Logement() {
  const { id } = useParams();
  return (
    <main>
      <h1>Page Logement {id}</h1>
    </main>
  );
}
