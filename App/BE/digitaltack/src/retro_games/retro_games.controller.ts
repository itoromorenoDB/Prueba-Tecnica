import { Controller, Get, HttpCode, Param, Query } from '@nestjs/common';
import { RetroGamesService } from './retro_games.service';
import { RetroGameDTO } from './retro_games.dto';

@Controller('retro-games')
export class RetroGamesController {
    constructor(private readonly retroGamesService: RetroGamesService) {}

    @Get()
    @HttpCode(200)
    getGames(@Query() query: Record<string, string>): RetroGameDTO[]
    {
        return this.retroGamesService.getRetroGames(query);
    }
}
