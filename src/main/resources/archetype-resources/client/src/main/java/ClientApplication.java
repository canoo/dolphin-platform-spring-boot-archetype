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

public class ClientApplication extends Application {

    private ClientContext ${artifactId}Context;

    @Override
    public void init() throws Exception {
        ClientConfiguration config = new JavaFXConfiguration("http://localhost:8080/dolphin");
        ${artifactId}Context = ClientContextFactory.connect(config).get();
    }

    @Override
    public void start(Stage primaryStage) throws Exception {

        FXMLLoader loader = new FXMLLoader(ClientApplication.class.getResource("view.fxml"));
        loader.setController(new MyViewBinder(${artifactId}Context));

        Scene scene = new Scene(loader.load());
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String... args) {
        launch(args);
    }
}
