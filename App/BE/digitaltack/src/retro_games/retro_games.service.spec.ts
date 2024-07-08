import { Test, TestingModule } from '@nestjs/testing';
import { RetroGamesService } from './retro_games.service';

describe('RetroGamesService', () => {
  let service: RetroGamesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RetroGamesService],
    }).compile();

    service = module.get<RetroGamesService>(RetroGamesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
