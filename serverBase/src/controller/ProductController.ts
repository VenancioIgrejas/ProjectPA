import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Product} from "../entity/Product";
import {Category} from "../entity/Category";
import {Provider} from "../entity/Provider";

export class ProductController {

    private productRepository = getRepository(Product);
    private providerRepository = getRepository(Provider);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.productRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.productRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        console.log(request.body);
        const product = await this.productRepository.create(request.body);
        return this.productRepository.save(product);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.productRepository.findOne(request.params.id);
        await this.productRepository.remove(userToRemove);
    }

}