package files;

import javafx.application.Application;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.StackPane;
import javafx.stage.Stage;

public class JavaFXExample1 extends Application {
	@Override
	public void start(Stage primaryStage) {
		Button bt = new Button("Click Me");
		StackPane frame = new StackPane();
		frame.getChildren().add(bt);
		bt.setOnAction(new EventHandler<ActionEvent>() {
			@Override
			public void handle(ActionEvent e) {
				System.out.println("javaFX says Hello !!");
			}
		});
		Scene scene = new Scene(frame, 300, 250);
		primaryStage.setTitle("Example 1");
		primaryStage.setScene(scene);
		primaryStage.show();
	}

	public static void main(String[] args) {
		launch(args);
	}
}
