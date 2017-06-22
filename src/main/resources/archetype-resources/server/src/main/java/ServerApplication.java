#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package};

import com.canoo.platform.server.spring.DolphinPlatformApplication;
import org.springframework.boot.SpringApplication;

@DolphinPlatformApplication
public class ServerApplication {

    public static void main(String[] args) throws Exception {
        SpringApplication.run(new Class[]{ServerApplication.class}, args);
    }
}

