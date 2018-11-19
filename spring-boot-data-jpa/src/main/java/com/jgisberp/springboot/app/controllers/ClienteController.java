package com.jgisberp.springboot.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.jgisberp.springboot.app.models.dao.IClienteDao;

@Controller
public class ClienteController {

	// Con autowired busca un componente registrado en el contenedor que implemente
	// la interfaz IClienteDao
	@Autowired
	// @Qualifier("clienteDaoJPA") Le ponemos el nombre para distinguir, la otra
	// etiqueta está en ClienteDaoImpl
	private IClienteDao clienteDao;

	@RequestMapping(value = "/listar", method = RequestMethod.GET)
	public String listar(Model model) {
		model.addAttribute("titulo", "Listado de clientes");
		model.addAttribute("clientes", clienteDao.findAll());
		return "listar";
	}
}
