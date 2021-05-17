import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Product} from "../entity/Product";

import {Category} from "../entity/Category";
import {Provider} from "../entity/Provider";
import {User} from "../entity/User";
import { privateDecrypt } from "crypto";

export class ProductController {

    private productRepository = getRepository(Product);
    private userRepository = getRepository(User);
    private providerRepository = getRepository(Provider);
    private categoryRepository = getRepository(Category);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.productRepository.find({ relations: ["User","Provider","Category"] });
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.productRepository.findOne(request.params.id,{ relations: ["User","Provider","Category"] });
    }

    async save({body:{name,comment,price,quantity,date_in,userId,categoryId,providerId}}: Request, response: Response, next: NextFunction) {
        // const product = await this.productRepository.create(request.body);
        // return this.productRepository.save(product);

        const product = new Product();
        product.name = name;
        product.comment = comment;
        product.price = price;
        product.quantity = quantity;
        product.date_in = date_in;

        return this.userRepository.findOne(userId)
                        .then(user => {
                            product.User = user;
                            return this.providerRepository.findOne(providerId);
                        })
                        .then(provider => {
                            product.Provider = provider;
                            return this.categoryRepository.findOne(categoryId);
                        })
                        .then(category => {
                            product.Category = category;
                            return this.productRepository.save(product);
                        })
                        .then(category => response.status(200).send({ message: 'ok' }))
                        .catch((err: any) => {
                            response.status(500).send({ message: err })
                        });
        

    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.productRepository.findOne(request.params.id);
        await this.productRepository.remove(userToRemove);
    }

}