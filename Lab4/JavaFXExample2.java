import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;
 

public class JavaFXExample2 extends Application {
   
   @Override
   public void start(Stage primaryStage) {
       
       
       Label label = new Label("Name:");
       TextField name = new TextField ();
       Button submit = new Button("Submit");
       
       
       HBox hb = new HBox();
       hb.getChildren().addAll(label, name, submit);
       hb.setSpacing(10);
       
       // Add welcome message
       Label message = new Label();
       hb.getChildren().add(message);
       
       //TODO 
       /*
        * Event Handling
        */
       
       Scene scene = new Scene(hb, 500, 100);
       
       primaryStage.setTitle("Welcome Message");
       primaryStage.setScene(scene);
       primaryStage.show();
   }
   
  
 
   public static void main(String[] args) {
       launch(args);
   }
   
}