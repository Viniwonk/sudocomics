import { Test, TestingModule } from '@nestjs/testing';
import { QuadrinhoController } from './quadrinho.controller';

describe('QuadrinhoController', () => {
  let controller: QuadrinhoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuadrinhoController],
    }).compile();
    controller = module.get<QuadrinhoController>(QuadrinhoController);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
