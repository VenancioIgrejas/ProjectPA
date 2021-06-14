import {getRepository} from "typeorm";
import {atob} from "atob";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";
import {jwt} from "jsonwebtoken";

export class UserController {

    private userRepository = getRepository(User);
    private secret = process.env.REACT_APP_AUTH0_SECRET;

    async vefifyJWT(request: Request, response: Response, next: NextFunction){
        const auth = request.get("Authorization");
        const token = auth.split(' ')[1];

        var payloadDatabs64 = auth.split('.')[1];
        var userId = JSON.parse(atob(payloadDatabs64)).sub;

        jwt.verify(token, this.secret, function(err, decoded) {
            if (err) return request.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
            
            // se tudo estiver ok, salva no request para uso posterior
            request.userId = userId;
            next();
          });
    }

    async all(request: Request, response: Response, next: NextFunction) {
        const auth = request.get("Authorization");
        var payloadDatabs64 = auth.split('.')[1];
        var userId = JSON.parse(atob(payloadDatabs64)).sub;

        console.log(userId);
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