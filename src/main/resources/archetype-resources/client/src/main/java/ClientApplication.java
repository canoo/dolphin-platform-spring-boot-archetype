
#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package};

import com.canoo.platform.client.ClientContext;
import com.canoo.platform.client.javafx.DolphinPlatformApplication;
import ${package}.view.MyView;
import javafx.scene.Scene;
import javafx.stage.Stage;

import java.net.MalformedURLException;
import java.net.URL;

/**
 * Main class for the JavaFX client
 * In this class the Dolphin Platform {@link ClientContext} is created automatically. This behavior is defined in the
 * super class {@link DolphinPlatformApplication}. A {@link ClientContext} defines the connection between the client and
 * the server. To define such a connection the abstract {@link DolphinPlatformApplication#getServerEndpoint} method must
 * be overridden.
 * In the start method a new view is created. Here a new instance of {@link MyView} is created. This project specific
 * class defines the view that is bound to an instance of the controller "MyController" on the Server. For more details
 * see the documentation of {@link MyView}.
 *
 * The {@link DolphinPlatformApplication} class uses the default JavaFX lifecycle internally. For more information read
 * the documentation of {@link javafx.application.Application}
 */
public class ClientApplication extends DolphinPlatformApplication {

    @Override
    protected URL getServerEndpoint() throws MalformedURLException {
        return new URL("http://localhost:8080/dolphin");
    }

    @Override
    protected void start(Stage primaryStage, ClientContext clientContext) throws Exception {
        MyView view = new MyView(clientContext);
        Scene scene = new Scene(view.getParent());
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String... args) {
        launch(args);
    }
}