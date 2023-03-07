import EventHandlerInterface from "../../shared/event/event-handler.interface";
import CustomerCreatedEvent from "../event/customer-created.event";


export default class SendConsoleLogWhenAddressCustomerIsChangeddHandler implements EventHandlerInterface<CustomerCreatedEvent> {

    handle(event: CustomerCreatedEvent): void {

        console.log(
            `Endereço do cliente: ${event.eventData.id}, ${event.eventData.name} alterado para: 
              Rua: ${event.eventData.address.street},
              Numero: ${event.eventData.address.number},
              Cep: ${event.eventData.address.zip},
              Cidade: ${event.eventData.address.city},
            `
          );
    }
}