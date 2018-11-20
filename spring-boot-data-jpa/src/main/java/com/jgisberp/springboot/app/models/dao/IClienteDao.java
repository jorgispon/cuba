package com.jgisberp.springboot.app.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.jgisberp.springboot.app.models.entity.Cliente;

public interface IClienteDao extends CrudRepository<Cliente, Long>{ // CrudRepository es propia de Spring y tiene los métodos para implementar un CRUD.

}
