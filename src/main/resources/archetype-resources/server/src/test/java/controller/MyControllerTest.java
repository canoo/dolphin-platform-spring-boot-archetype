#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package}.controller;

import ${package}.Constants;
import ${package}.model.MyModel;
import com.canoo.platform.spring.test.ControllerUnderTest;
import com.canoo.platform.spring.test.SpringJUnitControllerTest;
import org.junit.Assert;
import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class MyControllerTest extends SpringJUnitControllerTest {

    @Test
    public void testReset() {
        //given
        ControllerUnderTest<MyModel> controller = createController(Constants.CONTROLLER_NAME);
        controller.getModel().setValue("ABCDE");

        //when
        controller.invoke(Constants.RESET_ACTION);

        //then
        Assert.assertNull(controller.getModel().getValue());

        //Destroy controller after test
        controller.destroy();
    }

}
