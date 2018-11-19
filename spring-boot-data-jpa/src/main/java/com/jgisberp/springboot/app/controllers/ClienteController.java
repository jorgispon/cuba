package com.jgisberp.springboot.app.controllers;

import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

import com.jgisberp.springboot.app.models.dao.IClienteDao;
import com.jgisberp.springboot.app.models.entity.Cliente;

@Controller
@SessionAttributes("cliente") // Está guardando en esta sesión el objeto cliente con sus atributos, como por ejemplo el id
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

	@RequestMapping(value = "/form", method = RequestMethod.GET)
	public String crear(Map<String, Object> model) {

		Cliente cliente = new Cliente();
		model.put("cliente", cliente);
		model.put("titulo", "Formulario de Cliente");
		return "form";
	}

	// La anotación PathVariable inyecta el valor del parámetro de la ruta
	@RequestMapping(value = "/form/{id}")
	public String editar(@PathVariable(value = "id") Long id, Map<String, Object> model) { 

		Cliente cliente = null;

		if (id > 0) {
			cliente = clienteDao.findOne(id);
		} else {
			return "redirect:listar";
		}
		model.put("cliente", cliente);
		model.put("titulo", "Editar cliente");
		return "form";
	}

	// Lo que hace el SessionStatus es guardar el objeto en dicha sesion, por eso al
	// final haremos un set complete para que se elimine dicho objet
	@RequestMapping(value = "/form", method = RequestMethod.POST)
	public String guardar(@Valid Cliente cliente, BindingResult result, Model model, SessionStatus status) {

		if (result.hasErrors()) {
			model.addAttribute("titulo", "Formulario de Cliente");
			return "form";
		}

		clienteDao.save(cliente);
		status.setComplete();
		return "redirect:listar";
	}
	 
	@RequestMapping(value = "/eliminar/{id}")
	public String eliminar(@PathVariable(value = "id") Long id) {
		
		if(id > 0) {
			clienteDao.delete(id);
		}
		return "redirect:listar";
	}
}
