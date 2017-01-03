#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package};

/**
 * This class defines some constanst that are shared between Java clients and the server. Currently the client access
 * for controllers and controller action is based on Strings.
 */
public class Constants {

    /**
     * Defines the unique name of the controller type that is used in this example
     */
    public final static String CONTROLLER_NAME = "MyController";

    /**
     * Defines the name of the reset action in a MyController instance that can be triggered from the client
     */
    public final static String RESET_ACTION = "reset";

}
