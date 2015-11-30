#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package}.view;

import ${package}.Constants;
import ${package}.model.MyModel;
import com.canoo.dolphin.${artifactId}.ClientContext;
import com.canoo.dolphin.${artifactId}.javafx.AbstractViewBinder;
import com.canoo.dolphin.${artifactId}.javafx.FXBinder;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.TextField;

public class MyViewBinder extends AbstractViewBinder<MyModel> {

    @FXML
    private TextField valueField;

    @FXML
    private Button resetButton;

    public MyViewBinder(ClientContext ${artifactId}Context) {
        super(${artifactId}Context, Constants.CONTROLLER_NAME);
    }

    @Override
    protected void init() {
        FXBinder.bind(valueField.textProperty()).bidirectionalTo(getModel().valueProperty());
        resetButton.setOnAction(e -> invoke("reset"));
    }
}
