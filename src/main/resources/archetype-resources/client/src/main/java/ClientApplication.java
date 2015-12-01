#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package};

import com.canoo.dolphin.${artifactId}.ClientConfiguration;
import com.canoo.dolphin.${artifactId}.ClientContext;
import com.canoo.dolphin.${artifactId}.ClientContextFactory;
import com.canoo.dolphin.${artifactId}.javafx.JavaFXConfiguration;
import ${package}.view.MyViewBinder;
import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.stage.Stage;

/**
 * Main class for the JavaFX client
 * In this clas sthe global Dolphin Platform {@link ClientContext} is created. This context defines the central communication
 * between client and server. It's configured by using http://localhost:8080/dolphin as the server endpoint that is the
 * default Dolphin Platform endpoint.
 * In the start method a new view is created. Here the UI of the view is defined in a FXML file (view.fxml) and the
 * MyViewBinder class is used as client side controller for the view. Internally this class don't contain any controller
 * logic and only binds the given UI to Dolphin Platform and the controller instance on the server.
 */
public class ClientApplication extends Application {

    /**
     * Defines the global Dolphin Platform Connection
     */
    private ClientContext clientContext;

    @Override
    public void init() throws Exception {
        //Creates a configuration for the Dolphin Platform. Here the server endpoint is configured
        ClientConfiguration config = new JavaFXConfiguration("http://localhost:8080/dolphin");

        //Creates the global client context based on the configuration
        clientContext = ClientContextFactory.connect(config).get();
    }

    @Override
    public void start(Stage primaryStage) throws Exception {
        //Loads the view based on a FXML file
        FXMLLoader loader = new FXMLLoader(ClientApplication.class.getResource("view.fxml"));

        //Defines the FXML controller for the view. In this case the controller defines all the bindings
        //between the view and the synchronized Dolphin Platform model.
        loader.setController(new MyViewBinder(clientContext));

        //Shows the JavaFX client on the screen
        Scene scene = new Scene(loader.load());
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String... args) {
        launch(args);
    }
}
