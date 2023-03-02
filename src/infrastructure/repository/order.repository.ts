import Order from "../../domain/entity/order";
import OrderItem from "../../domain/entity/order_item";
import OrderRepositoryInterface from "../../domain/repository/order.repository.interface";
import OrderItemModel from "../db/sequelize/model/order-item.model";
import OrderModel from "../db/sequelize/model/order.model";

export default class OrderRepository implements OrderRepositoryInterface {
    
    async create(entity: Order): Promise<void> {
        await OrderModel.create({
            id: entity.id,
            customer_id: entity.customerId,
            total: entity.total(),
            items: entity.items.map(item => ({
                id: item.id,
                product_id: item.productId,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
            })),
        }, {
            include: [{model: OrderItemModel}],
        });        
    }

    async update(entity: Order): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async findById(id: string): Promise<Order> {
        let orderModel 
        try {
            orderModel = await OrderModel.findOne({
                where: {
                    id
                },
                include:  ["items"],
                rejectOnEmpty: true,
            });
        } catch (error) {
            throw new Error("Customer not found");
        }
        const items = orderModel.items.map(orderItem => {
            let item = new OrderItem (
                orderItem.id,
                orderItem.name,
                orderItem.price,                
                orderItem.product_id,
                orderItem.quantity,
            );
            return item;
        } );
        const order = new Order(orderModel.id, orderModel.customer_id, items);
        return order;
    }

    async findAll(): Promise<Order[]> {
        throw new Error("Method not implemented.");
        
    }
}