package files;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Scanner;

public class Server
{

	public static void main(String[] args) throws IOException
	{

		ServerSocket serverSocket = null;
		int clientNum = 0; // keeps track of how many clients were created

		// 1. CREATE A NEW SERVERSOCKET
		try
		{
			serverSocket = new ServerSocket(4444); // provide MYSERVICE at port
													// 4444
			//System.out.println(serverSocket);
		} catch (IOException e)
		{
			System.out.println("Could not listen on port: 4444");
			System.exit(-1);
		}

		// 2. LOOP FOREVER - SERVER IS ALWAYS WAITING TO PROVIDE SERVICE!
		while (true)
		{
			Socket clientSocket = null;
			try
			{

				// 2.1 WAIT FOR CLIENT TO TRY TO CONNECT TO SERVER
				//System.out.println("Waiting for client " + (clientNum + 1) + " to connect!");
				clientSocket = serverSocket.accept();

				// 2.2 SPAWN A THREAD TO HANDLE CLIENT REQUEST
				//System.out.println("Server got connected to a client" + ++clientNum);
				Thread t = new Thread(new ClientHandler(clientSocket, clientNum));
				t.start();

			} catch (IOException e)
			{
				System.out.println("Accept failed: 4444");
				System.exit(-1);
			}

			// 2.3 GO BACK TO WAITING FOR OTHER CLIENTS
			// (While the thread that was created handles the connected client's
			// request)

		} // end while loop

	} // end of main method

} // end of class MyServer

class ClientHandler implements Runnable
{
	Socket s; // this is socket on the server side that connects to the CLIENT
	int num; // keeps track of its number just for identifying purposes

	ClientHandler(Socket s, int n)
	{
		this.s = s;
		num = n;
	}

	// This is the client handling code
	public void run()
	{
		//printSocketInfo(s); // just print some information at the server side about the connection
		Scanner in;
		String clientMessage = "";

		try
		{
			PrintWriter out = new PrintWriter(s.getOutputStream(), true);
			in = new Scanner(new BufferedInputStream(s.getInputStream()));
					
			while (!clientMessage.contains("has left the chat"))
			{
				// 1. USE THE SOCKET TO READ WHAT THE CLIENT IS SENDING
				clientMessage = in.nextLine();

				// 2. PRINT WHAT THE CLIENT SENT ON SERVER
				System.out.println(clientMessage);

				// 3. BROADCAST MESSAGE TO CLIENTS
				out.println(clientMessage);
			}
		} catch (IOException e)
		{
			e.printStackTrace();
		}

		// This handling code dies after doing all the printing
	} // end of method run()

	void printSocketInfo(Socket s)
	{
		System.out.print("Socket on Server " + Thread.currentThread() + " ");
		System.out.print("Server socket Local Address: " + s.getLocalAddress() + ":" + s.getLocalPort());
		System.out.println("  Server socket Remote Address: " + s.getRemoteSocketAddress());
	} // end of printSocketInfo

} // end of class ClientHandler
