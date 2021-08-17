import { gql, useQuery } from "@apollo/client";
import { Header, List } from "grommet";
import { ToDo } from "../generated/graphql";

const TODOS = gql`
  query getToDos {
    getToDos {
      id
      title
      description
    }
  }
`;
type Response = {
  getToDos: ToDo[];
};
export default function TodosList() {
  const { loading, error, data } = useQuery<Response>(TODOS);
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error.message}</p>;

  console.log(data);

  if (!data) return <p>No data</p>;

  return (
    <>
      <Header background="brand">
        <h1>Hay {data?.getToDos.length} todos</h1>
      </Header>
      <List
        primaryKey="title"
        secondaryKey="description"
        data={data.getToDos}
      />
    </>
  );
}
