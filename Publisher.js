import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.Channel;
import java.util.Scanner;

public class PublicadorRabbit {
    public static void main(String[] args) throws Exception {
        ConnectionFactory factory = new ConnectionFactory();
    factory.setHost("moose-01.rmq.cloudamqp.com");
    factory.setUsername("fkrLsku");
    factory.setPassword("kqkPx3QUSwHMpg7lSxLbSkJq0QXSCMBB");
    factory.setVirtualHost("fkrLsku");
    factory.setPort(5672);

        Connection connection = factory.newConnection();
        Channel channel = connection.createChannel();
        Scanner scanner = new Scanner(System.in);

    do {
        System.out.print("Ingrese el nombre del producto: ");
            String nombre = scanner.nextLine();
        System.out.print("Ingrese la cantidad: ");
            String cantidad = scanner.nextLine();
        System.out.print("Ingrese el precio: ");
            String precio = scanner.nextLine();

            String message = nombre + ", " + cantidad + ", " + precio;
        channel.basicPublish("", "novedades.netflix", null, message.getBytes());
        System.out.println("Mensaje enviado: " + message);

        System.out.print("¿Desea enviar otro mensaje? (Y/N): ");
    } while (scanner.nextLine().equalsIgnoreCase("Y"));

    channel.close();
    connection.close();
    scanner.close();
}
}
