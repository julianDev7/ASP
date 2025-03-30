import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.Channel;
import java.util.Scanner;

public class PublicadorRabbit {
    public static void main(String[] args) throws Exception {
        ConnectionFactory factory = new ConnectionFactory();
    factory.setHost("");
    factory.setUsername("");
    factory.setPassword("");
    factory.setVirtualHost("");
    factory.setPort();

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
        channel.basicPublish("", "", null, message.getBytes());
        System.out.println("Mensaje enviado: " + message);

        System.out.print("¿Desea enviar otro mensaje? (Y/N): ");
    } while (scanner.nextLine().equalsIgnoreCase("Y"));

    channel.close();
    connection.close();
    scanner.close();
}
}
