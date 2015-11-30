#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package}.controller;

import com.canoo.dolphin.${artifactId}.DolphinAction;
import com.canoo.dolphin.${artifactId}.DolphinController;
import com.canoo.dolphin.${artifactId}.DolphinModel;
import ${package}.Constants;
import ${package}.model.MyModel;

import javax.annotation.PostConstruct;

@DolphinController(Constants.CONTROLLER_NAME)
public class MyController {

    @DolphinModel
    private MyModel model;

    @PostConstruct
    public void init() {
        model.valueProperty().onChanged(e -> System.out.println("VALUE CHANGED FROM " + e.getOldValue() + " TO " + e.getNewValue()));
    }

    @DolphinAction
    public void reset() {
        model.setValue(null);
    }
}
