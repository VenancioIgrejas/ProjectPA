import {getRepository} from "typeorm";
import {atob} from "atob";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";
import {jwt} from "jsonwebtoken";
import {BaseController} from "./BaseController"

export class UserController extends BaseController{

    private userRepository = getRepository(User);
    
    async all(request: Request, response: Response, next: NextFunction) {

        //Verifica se o usuario está authenticado
        this.verifyJWT(request, function(err, decoded){
            if(err) return response.status(500).json({ auth: false, message: err });
        });

        var userId = this.getUserId(request);

        return this.userRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.remove(userToRemove);
    }

}