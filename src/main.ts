import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/order_item";

let customer = new Customer("123", "Fabio de Stefani");
const address = new Address("Rua 1", 123, "Criciuma", "SC", "88802100")
customer.setAddress(address);
customer.activate();

const item1 = new OrderItem("1", "Item 1", 10);
const item2 = new OrderItem("2", "Item 2", 15);
let order = new Order("1", customer._id, [item1, item2]);