import { Injectable } from '@nestjs/common';

@Injectable()
export class FizzbuzzService {
  fizzbuzz(n: number): string {
    if (n < 1 || n > 100) {
      return undefined;
    } else if (n % 15 === 0) {
      return 'FizzBuzz';
    } else if (n % 3 === 0) {
      return 'Fizz';
    } else if (n % 5 === 0) {
      return 'Buzz';
    } else return 'El numero ' + n + ' no es divisible por 3 ni 5 ni 15';
  }
}
