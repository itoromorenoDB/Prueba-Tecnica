import { Injectable } from '@nestjs/common';
import { RetroGameDTO, RetroGamesDTO } from './retro_games.dto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class RetroGamesService {
    private retroGames: RetroGamesDTO;

    constructor() {
        this.loadRetroGames();
    }

    private loadRetroGames() {
        const filePath = path.join(__dirname, '../../data/retro_games.mock.json');
        const fileContents = fs.readFileSync(filePath, 'utf8');
        this.retroGames = JSON.parse(fileContents);
    }

    public getRetroGames(query: Record<string, string>): RetroGameDTO[] {
        return this.retroGames.retroGames.filter((game: any) => {
            return Object.keys(query).every(key => {
              if (game[key] !== undefined) {
                if (key === 'id') {
                  return game[key] === Number(query[key]);
                }
                return game[key].toString().toLowerCase().includes(query[key].toString().toLowerCase());
              }
              return false;
            });
          });
    }
}
