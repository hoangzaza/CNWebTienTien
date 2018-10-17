package com.nhom13.dao.impl;

import com.nhom13.dao.RoleDAO;
import com.nhom13.entity.security.Role;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class RoleDAOImpl implements RoleDAO {

    @Autowired
    SessionFactory mySessionFactory;
    @Override
    public void addRole(Role role) {
        Session session = mySessionFactory.getCurrentSession();
        session.save(role) ;
    }
}
