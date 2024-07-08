import React, { useEffect, useState } from "react";
import { Alert, Container, Row, Spinner } from "react-bootstrap";
import RetroGamesCard from "../RetroGamesCard/RetroGamesCard";
import { RetroGameDTO } from "../retro_games.dto";

const filterGamesEndpoint = "http://localhost:3000/retro-games";

const RetroGamesGrid = ({ query }: { query: string }) => {
  const [retroGames, setRetroGames] = useState<RetroGameDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const queryApi = `${filterGamesEndpoint}${
          query !== "" ? `?name=${query}` : ""
        }`;
        const response = await fetch(queryApi);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: RetroGameDTO[] = await response.json();
        setRetroGames(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchGames();
  }, [query]);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" role="status"></Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <Container>
        <Alert variant="danger">
          <Alert.Heading>Error</Alert.Heading>
          <p>{error}</p>
        </Alert>
      </Container>
    );
  }
  return (
    <div>
      <Container>
        <Row>
          {retroGames.map((game) => (
            <RetroGamesCard
              id={game.id}
              imageUrl={game.imageUrl}
              name={game.name}
              overview={game.overview}
              price={game.price}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default RetroGamesGrid;
