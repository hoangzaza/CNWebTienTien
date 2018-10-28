package com.nhom13.dao.impl;

import com.nhom13.dao.SubjectDAO;
import com.nhom13.entity.Subject;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public class SubjectDAOImpl implements SubjectDAO {

    @Autowired
    private SessionFactory mySessionFactory;

    @Override
    public List<Subject> getListSubjects() {
        String hql = "from subject s order by s.subjectId";
        Session session = mySessionFactory.getCurrentSession();
        List<Subject> subjectList = session.createQuery(hql).getResultList();
        return subjectList;
    }
}
