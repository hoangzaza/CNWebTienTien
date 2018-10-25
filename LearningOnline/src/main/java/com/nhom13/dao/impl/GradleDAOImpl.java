package com.nhom13.dao.impl;

import com.nhom13.dao.GradeDAO;
import com.nhom13.entity.Class;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public class GradleDAOImpl implements GradeDAO {

    @Autowired
    private SessionFactory mySessionFactory;

    @Override
    public List<Class> getListClass() {
        String hql = "from class";
        Session session = mySessionFactory.getCurrentSession();
        List<Class> classes = session.createQuery(hql).getResultList();
        return classes;
    }
}
