import Address from "./domain/entity/address";
import Customer from "./domain/entity/customer";
import Order from "./domain/entity/order";
import OrderItem from "./domain/entity/order_item";

let customer = new Customer("123", "Fabio de Stefani");
const address = new Address("Rua 1", 123, "Criciuma", "SC", "88802100")
customer.setAddress(address);
customer.activate();

const item1 = new OrderItem("1", "Item 1", 10, "p1", 1);
const item2 = new OrderItem("2", "Item 2", 15, "p2", 1);
let order = new Order("1", "123", [item1, item2]);