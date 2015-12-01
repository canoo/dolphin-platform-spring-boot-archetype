#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package}.model;

import com.canoo.dolphin.mapping.DolphinBean;
import com.canoo.dolphin.mapping.Property;

/**
 * Defines the model of the MVC that is defined in this example. When using Dolphin Platform a view-controller-pair will
 * share one model that is automatially synchronized between the view on the client and teh controller on the server.
 * The model will automatically instanziated and managed by the platform and its lifecylce is bound to lifecylce of the view.
 *
 * This basic model only contains one value. When defining models with Dolphin Platform all attributes must be
 * defined as observable properties. To do so Dolphin Platform provides the {@link Property} interface. A property
 * can contain a primitive datatype like String or int. In addition a property can contain another Dolphin Platform
 * model. By doing so a hierarchy can be defined. In addition Dolphin Platform contains extensions for the Java
 * collections API like an observable list. This types can be used in model classes, too.
 */
@DolphinBean
public class MyModel {

    /**
     * The value that is part of this model
     */
    private Property<String> value;

    /**
     * This method returns the property. By using this method you can easily add an observer to the property
     * @return thze property
     */
    public Property<String> valueProperty() {
        return value;
    }

    /**
     * This is a convenience method that defines a getter based on the property.
     * @return the internal value of the property
     */
    public String getValue() {
        return valueProperty().get();
    }

    /**
     * This is a convenience method that defines a setter based on the property.
     * @param value the new internal value of the property
     */
    public void setValue(String value) {
        valueProperty().set(value);
    }
}
