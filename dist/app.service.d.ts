export declare class AppService {
    getHello(): string;
    getProducts(): {
        id: number;
        name: string;
    }[];
    getCategories(): {
        id: number;
        name: string;
    }[];
    createProduct(): {
        id: number;
        name: string;
    };
    createCategory(): {
        id: number;
        name: string;
    };
}
