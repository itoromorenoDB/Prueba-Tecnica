import { useState } from "react";
import { Button, Container, Form, FormControl } from "react-bootstrap";

const RetroGamesForm = ({setQuery} : {setQuery: (a: string) => void}) => {
  const [queryString, setQueryString] = useState<string>("");
  return (
    <Container>
      <h1 className="text-light">Retro adventure Store</h1>
      <Form style={{ display: "flex", alignItems: "center" }} className="mb-3">
        <FormControl
          type="text"
          value={queryString}
          onChange={(e) => setQueryString(e.target.value)}
          placeholder="Search"
        />
        <Button variant="info" className="m-1" onClick={() => setQuery(queryString)}>
          Search
        </Button>
      </Form>
    </Container>
  );
};

export default RetroGamesForm;
