import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";

import {Provider} from "../entity/Provider";
import {User} from "../entity/User";

export class ProviderController {

    private productRepository = getRepository(Provider);
    private userRepository = getRepository(User);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.productRepository.find({ relations: ["User"] });
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.productRepository.findOne(request.params.id,{ relations: ["User"] })
                            .catch((err: any) => {
                                    response.status(500).send({ message: err })
                                });
    }

    async save({body:{name,cel,info,per_price,userId}}: Request, response: Response, next: NextFunction) {
        const provider = new Provider();
        provider.name = name;
        provider.cel = cel;
        provider.info = info;
        provider.per_price = per_price;

        return this.userRepository.findOne(userId)
                        .then(user => {
                            provider.User = user;
                            this.productRepository.save(provider);
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