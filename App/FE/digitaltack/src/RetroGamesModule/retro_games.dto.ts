export type RetroGameDTO = {
  id: number;
  name: string;
  imageUrl: string;
  overview: string;
  price: number;
}

export type  RetroGamesDTO = {
  retroGames: RetroGameDTO[];
}
