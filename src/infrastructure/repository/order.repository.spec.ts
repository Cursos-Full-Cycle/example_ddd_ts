import { Sequelize } from "sequelize-typescript";
import Address from "../../domain/entity/address";
import Customer from "../../domain/entity/customer";
import Order from "../../domain/entity/order";
import OrderItem from "../../domain/entity/order_item";
import Product from "../../domain/entity/product";
import CustomerModel from "../db/sequelize/model/customer.model";
import OrderItemModel from "../db/sequelize/model/order-item.model";
import OrderModel from "../db/sequelize/model/order.model";
import ProductModel from "../db/sequelize/model/product.model";
import CustomerRepository from "./customer.repository";
import OrderRepository from "./order.repository";
import ProductRepository from "./product.repostiry";

describe("Order repository test", () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: "sqlite",
            storage: ":memory:",
            logging: false,
            sync: { force: true },            
        });

        sequelize.addModels([CustomerModel, OrderModel, OrderItemModel, ProductModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    });

    it("should create a new order", async () => {
        const customerRepository = new CustomerRepository();
        const customer = new Customer("1", "Customer 1");
        const address = new Address("Street 1", 1, "City", "88802-100");
        customer.changeAddress(address);
        await customerRepository.create(customer);

        const productRepository = new ProductRepository();
        const product = new Product("1", "Product 1", 10);
        await productRepository.create(product);

        const orderItem = new OrderItem(
            "1",
            product.name,
            product.price,
            product.id,
            2
        );
        const order = new Order("1", customer.id, [orderItem]);

        const orderRepository = new OrderRepository();
        await orderRepository.create(order);

        const orderModel = await OrderModel.findOne({
            where: {id: order.id},
            include: ["items"],
        });

        expect(orderModel.toJSON()).toStrictEqual({
            id: order.id,
            customer_id: customer.id,
            total: order.total(),
            items: [
                {
                    id: orderItem.id,
                    name: orderItem.name,
                    price: orderItem.price,
                    quantity: orderItem.quantity,
                    order_id: order.id,
                    product_id: product.id,
                },
            ], 
        });   

    });

    it("should update a order", async () => {
        
    });

    it("should find a order ", async () => {
        const customerRepository = new CustomerRepository();
        const customer = new Customer("1", "Customer 1");
        const address = new Address("Street 1", 1, "City", "88802-100");
        customer.changeAddress(address);
        await customerRepository.create(customer);

        const productRepository = new ProductRepository();
        const product = new Product("1", "Product 1", 10);
        await productRepository.create(product);

        const orderItem = new OrderItem(
            "1",
            product.name,
            product.price,
            product.id,
            2
        );
        const order = new Order("1", customer.id, [orderItem]);

        const orderRepository = new OrderRepository();
        await orderRepository.create(order);

        const oderFounded = await orderRepository.findById(order.id);
        expect(order).toStrictEqual(oderFounded);
        // const customerFounded = await customerRepository.findById(customer.id);        
        // expect(customer).toStrictEqual(customerFounded);

    });

    it("should throw an error when order is not found ", async () => {
        // const customerRepository= new CustomerRepository();
        // expect(async () => {
        //     await customerRepository.findById("11222");
        // }).rejects.toThrow("Customer not found");
    });

    it("should find all orders ", async () => {
        // const customerRepository= new CustomerRepository();
        // const customer = new Customer("1", "Customer 1");
        // const address = new Address("Street 1", 1, "City", "88802-100");
        // customer.changeAddress(address);
        // customer.addRewardPoints(10);
        // customer.activate();
        // await customerRepository.create(customer);

        // const customer2 = new Customer("2", "Customer 2");
        // const address2 = new Address("Street 1", 2, "City", "88802-100");
        // customer2.changeAddress(address2);
        // customer2.addRewardPoints(10);
        // customer2.activate();
        // await customerRepository.create(customer2);

        // const costumers = await customerRepository.findAll();

        // expect(costumers).toHaveLength(2);
        // expect(costumers).toContainEqual(customer);
        // expect(costumers).toContainEqual(customer2);
    });

});