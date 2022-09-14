"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FizzbuzzService = void 0;
const common_1 = require("@nestjs/common");
let FizzbuzzService = class FizzbuzzService {
    fizzbuzz(n) {
        if (n % 15 === 0) {
            return 'FizzBuzz';
        }
        else if (n % 3 === 0) {
            return 'Fizz';
        }
        else if (n % 5 === 0) {
            return 'Buzz';
        }
        else {
            return 'El numero ' + n + ' no es divisible por 3 ni 5 ni 15';
        }
    }
};
FizzbuzzService = __decorate([
    (0, common_1.Injectable)()
], FizzbuzzService);
exports.FizzbuzzService = FizzbuzzService;
//# sourceMappingURL=fizzbuzz.service.js.map