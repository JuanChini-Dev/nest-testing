// import { Test, TestingModule } from '@nestjs/testing';
// import { FizzbuzzController } from './fizzbuzz.controller';
// import { FizzbuzzService } from './fizzbuzz.service';

// describe('FizzbuzzController', () => {
//   let controller: FizzbuzzController;
//   let service: FizzbuzzService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [FizzbuzzController],
//       providers: [FizzbuzzService],
//     }).compile();

//     controller = module.get<FizzbuzzController>(FizzbuzzController);
//     service = module.get<FizzbuzzService>(FizzbuzzService);
//   });

//   it('should return the correct Fizz Buzz word according the introduced number (Using spyOn)', () => {
//     const result = 'Fizz';

//     jest.spyOn(service, 'fizzbuzz').mockImplementation(() => result);

//     expect(controller.fizzbuzz(-1)).toBe(result);
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });
// });

import { Test, TestingModule } from '@nestjs/testing';
import { FizzbuzzController } from './fizzbuzz.controller';
import { FizzbuzzService } from './fizzbuzz.service';

describe('FizzbuzzController', () => {
  let controller: FizzbuzzController;
  let service: FizzbuzzService;

  let mockedFizzBuzzValue = 'FizzBuzz';
  let mockFizzBuzzService = {
    fizzbuzz: () => mockedFizzBuzzValue,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FizzbuzzController],
      providers: [FizzbuzzService],
    })
      .overrideProvider(FizzbuzzService)
      .useValue(mockFizzBuzzService)
      .compile();

    controller = module.get<FizzbuzzController>(FizzbuzzController);
    service = module.get<FizzbuzzService>(FizzbuzzService);
  });

  it('should return the correct Fizz Buzz word according the introduced number (Using spyOn)', () => {
    const result = 'FizzBuzz';

    const fizzbuzzSpy = jest.spyOn(service, 'fizzbuzz');
    fizzbuzzSpy.mockImplementation(() => result);

    expect(controller.fizzbuzz(3)).toBe(result);

    fizzbuzzSpy.mockRestore();
  });

  it('should return the correct Fizz Buzz word according the introduced number (Using mocking de servicios)', () => {
    expect(controller.fizzbuzz(6)).toBe(mockedFizzBuzzValue);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
