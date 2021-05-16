import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Category} from "../entity/Category";
import {User} from "../entity/User";

export class CategoryController {

    private categoryRepository = getRepository(Category);
    private userRepository = getRepository(User);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.categoryRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.categoryRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        console.log(request.body);
        const category = await this.categoryRepository.create(request.body)[0];
        const user = await this.userRepository.findOne(request.body.userId);
        console.log(user);
        
        category.User = user;

        return this.categoryRepository.save(category);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.categoryRepository.findOne(request.params.id);
        await this.categoryRepository.remove(userToRemove);
    }

}