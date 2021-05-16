import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";

import {User} from "./entity/User";
import {Category} from "./entity/Category";
import {Product} from "./entity/Product";
import {Provider} from "./entity/Provider";


import * as providerjson from './../../dataMock/MOCK_DATA_provider.json';
import  * as categoryjson from './../../dataMock/MOCK_DATA_category.json';
import  * as  usersjson from './../../dataMock/MOCK_DATA_users.json';
import  * as  productjson from './../../dataMock/MOCK_DATA_product.json';

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(3001);

    // insert new users for test
    // await connection.manager.save(connection.manager.create(User, {
    //     login: "Timber",
    //     password: "Saw"
    // }));

    // insert new users for test
    // await connection.manager.save(connection.manager.create(User, usersjson));
    // await connection.manager.save(connection.manager.create(Category, categoryjson));
    // await connection.manager.save(connection.manager.create(Provider, providerjson));
    // await connection.manager.save(connection.manager.create(Product, productjson));
    // await connection.manager.save(connection.manager.createQueryBuilder().insert().into(User).values(usersjson).execute());
    
    // await connection.createQueryBuilder().insert().into(User).values(usersjson).execute();

    console.log("Express server has started on port 3001. Open http://localhost:3001/users to see results");

}).catch(error => console.log(error));
