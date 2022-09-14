import { FizzbuzzService } from './fizzbuzz.service';
export declare class FizzbuzzController {
    private fizzbuzzService;
    constructor(fizzbuzzService: FizzbuzzService);
    fizzbuzz(number: any): string;
}
