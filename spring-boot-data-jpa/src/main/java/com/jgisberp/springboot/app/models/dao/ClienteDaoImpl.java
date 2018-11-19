package com.jgisberp.springboot.app.models.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.jgisberp.springboot.app.models.entity.Cliente;

//Esta anotación sirve para marcar la clase como componente de persistencia de acceso a datos.
// Si le ponemos un nombre es por si más de una clase llaman a esta implementacion
@Repository("clienteDaoJPA")
public class ClienteDaoImpl implements IClienteDao {

	@PersistenceContext
	private EntityManager em;

	@SuppressWarnings("unchecked")
	@Override
	public List<Cliente> findAll() {
		// TODO Auto-generated method stub
		return em.createQuery("from Cliente").getResultList();
	}

}
