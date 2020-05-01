import { Product } from "src/domain/models/product.model";

export class ProductDto {
    readonly id: number;
    readonly name: string;
    readonly description: string;
    readonly value: number;
    readonly evaluation: number;
    readonly color: string;
    
    constructor(object: Product) {
        this.id = object.id;
        this.name = object.name;
        this.description = object.description;
        this.value = object.value;
        this.evaluation = object.evaluation;
        this.color = object.color;
    }
}