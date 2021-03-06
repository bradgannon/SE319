package files;

import java.io.BufferedOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.Socket;
import java.net.UnknownHostException;
import java.util.Scanner;

/**
 * 
 * @author Brad Gannon
 * 
 */
public class Client
{
	private static Scanner scan = new Scanner(System.in);
	private static String name = "";
	
	public static void main(String[] args) throws UnknownHostException, IOException
	{
		
		System.out.print("	>Enter your name: ");
		name = scan.nextLine();
		
		// CONNECT TO THE SERVER AT PORT 4444
		Socket socket = new Socket("localhost", 4444);
		PrintWriter out = new PrintWriter(new BufferedOutputStream(socket.getOutputStream()));
		out.println("New user joined: " + name);
		out.flush();
		
		boolean alive = true;
		String chat = "";
		
		while(alive)
		{			
			System.out.printf("%s: ", name);
			chat = scan.nextLine();
			
			if(chat.equals("bye") || chat.equals("Bye"))
			{
				alive = false;
				chat = name + " has left the chat\n";
			}
			else
			{
				chat = name + ": " + chat;
			}
			
			out.println(chat);
			out.flush();
		}
		
		socket.close();
	}
}
