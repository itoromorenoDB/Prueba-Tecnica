export class RetroGameDTO {
    id: number;
    name: string;
    imageUrl: string;
    overview: string;
    price: number;
}

export class RetroGamesDTO {
    retroGames: RetroGameDTO[];
}