import { Test, TestingModule } from '@nestjs/testing';
import { RetroGamesController } from './retro_games.controller';

describe('RetroGamesController', () => {
  let controller: RetroGamesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RetroGamesController],
    }).compile();

    controller = module.get<RetroGamesController>(RetroGamesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
