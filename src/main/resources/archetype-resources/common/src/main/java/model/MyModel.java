#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package}.model;

import com.canoo.dolphin.mapping.DolphinBean;
import com.canoo.dolphin.mapping.Property;

@DolphinBean
public class MyModel {

    private Property<String> value;

    public Property<String> valueProperty() {
        return value;
    }

    public String getValue() {
        return valueProperty().get();
    }

    public void setValue(String value) {
        valueProperty().set(value);
    }
}
