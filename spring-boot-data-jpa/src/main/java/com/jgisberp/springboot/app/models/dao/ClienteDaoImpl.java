package com.jgisberp.springboot.app.models.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

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
		return em.createQuery("from Cliente").getResultList();
	}
	
	@Override
	public Cliente findOne(Long id) {
		return em.find(Cliente.class, id);
	}

	@Override
	@Transactional
	public void save(Cliente cliente) { // También es el método para editar un cliente.

		if (cliente.getId() != null && cliente.getId() > 0) {
			em.merge(cliente); // Este método actualiza el cliente si el id es mayor que 0, es decir, si existe.
		} else {
			em.persist(cliente); // Este método añade el objeto que le pases
		}
	}

	@Override
	@Transactional
	public void delete(Long id) {
		em.remove(findOne(id));
	}

}
