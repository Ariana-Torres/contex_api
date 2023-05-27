"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
    getProducts() {
        return [
            { id: 1, name: 'Product 1' },
            { id: 2, name: 'Product 2' },
        ];
    }
    getCategories() {
        return [
            { id: 1, name: 'Category 1' },
            { id: 2, name: 'Category 2' },
        ];
    }
    createProduct() {
        return { id: 3, name: 'Product 3' };
    }
    createCategory() {
        return { id: 3, name: 'Category 3' };
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map