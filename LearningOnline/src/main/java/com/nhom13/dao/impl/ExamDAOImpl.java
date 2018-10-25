package com.nhom13.dao.impl;

import com.nhom13.dao.ExamDAO;
import com.nhom13.entity.Exam;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public class ExamDAOImpl implements ExamDAO {
    @Autowired
    SessionFactory mySessionFactory;

    @Override
    public List<Exam> getListExam() {
        String hql = "from Exam";
        Session session = mySessionFactory.getCurrentSession();
        return session.createQuery(hql).getResultList();
    }
}
