import { Test, TestingModule } from '@nestjs/testing';
import { ContractResolverResolver } from './contract-resolver.resolver';

describe('ContractResolverResolver', () => {
  let resolver: ContractResolverResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContractResolverResolver],
    }).compile();

    resolver = module.get<ContractResolverResolver>(ContractResolverResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
