package com.jgisberp.springboot.app;

import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

//ESTA CLASE EN WAR LO QUE HACE ES REALIZAR EL TRABAJO DEL WEB.XML
public class ServletInitializer extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(SpringBootWebJspApplication.class);
	}

}
