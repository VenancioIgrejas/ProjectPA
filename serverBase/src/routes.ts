import {UserController} from "./controller/UserController";
import {ProductController} from "./controller/ProductController";
import {ProviderController} from "./controller/ProviderController";
import {CategoryController} from "./controller/CategoryController";


export const Routes = [
    
 // routes for Users
    {
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},



//routes for provider
{
    method: "get",
    route: "/provider",
    controller: ProviderController,
    action: "all"
}, {
    method: "get",
    route: "/provider/:id",
    controller: ProviderController,
    action: "one"
}, {
    method: "post",
    route: "/provider",
    controller: ProviderController,
    action: "save"
}, {
    method: "delete",
    route: "/provider/:id",
    controller: ProviderController,
    action: "remove"
},


//routes for category
{
    method: "get",
    route: "/category",
    controller: CategoryController,
    action: "all"
}, {
    method: "get",
    route: "/category/:id",
    controller: CategoryController,
    action: "one"
}, {
    method: "post",
    route: "/category",
    controller: CategoryController,
    action: "save"
}, {
    method: "delete",
    route: "/category/:id",
    controller: CategoryController,
    action: "remove"
},

//routes for product
{
    method: "get",
    route: "/product",
    controller: ProductController,
    action: "all"
}, {
    method: "get",
    route: "/product/:id",
    controller: ProductController,
    action: "one"
}, {
    method: "post",
    route: "/product",
    controller: ProductController,
    action: "save"
}, {
    method: "delete",
    route: "/product/:id",
    controller: ProductController,
    action: "remove"
}
];