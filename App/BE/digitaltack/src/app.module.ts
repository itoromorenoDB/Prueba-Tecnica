import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RetroGamesController } from './retro_games/retro_games.controller';
import { RetroGamesService } from './retro_games/retro_games.service';

@Module({
  imports: [],
  controllers: [AppController, RetroGamesController],
  providers: [AppService, RetroGamesService],
})
export class AppModule {}
