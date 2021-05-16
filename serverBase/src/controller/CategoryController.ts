import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Category} from "../entity/Category";
import {User} from "../entity/User";

export class CategoryController {

    private categoryRepository = getRepository(Category);
    private userRepository = getRepository(User);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.categoryRepository.find({ relations: ["User"] });
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.categoryRepository.findOne(request.params.id,{ relations: ["User"] });
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const category = new Category();
        category.name = request.body.name;

        return this.userRepository.findOne(request.body.userId)
                        .then(user => {
                            console.log(category.User); 
                            category.User = user;
                            this.categoryRepository.save(category);
                        })
                        .then(category => response.status(200).send({ message: 'ok' }))
                        .catch((err: any) => {
                            response.status(500).send({ message: err })
                        });

    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.categoryRepository.findOne(request.params.id);
        await this.categoryRepository.remove(userToRemove);
    }

}