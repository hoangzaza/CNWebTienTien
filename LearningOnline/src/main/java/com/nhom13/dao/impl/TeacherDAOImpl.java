package com.nhom13.dao.impl;

import com.nhom13.dao.TeacherDAO;
import com.nhom13.entity.Teacher;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.Query;
import java.util.List;

@Repository
@Transactional
public class TeacherDAOImpl implements TeacherDAO {
    @Autowired
    private SessionFactory mySessionFactory;

    public List<Teacher> getListTeacher(){
        Session session = mySessionFactory.getCurrentSession();
        String query = "from teacher";
        return session.createQuery(query).getResultList();
    }

    public Teacher getTeacherByID(int teacherID){
        Session session = mySessionFactory.getCurrentSession();
        Teacher teacher = session.get(Teacher.class,teacherID);
        return teacher;
    }

    @Override
    public List<Teacher> getListTeacherLimit(int start) {
        Session session = mySessionFactory.getCurrentSession();
        List<Teacher> teachers = (List<Teacher>) session.createQuery("from teacher").setFirstResult(start).setMaxResults(5).getResultList();
        return teachers;
    }

    @Override
    public void insertTeacher(Teacher teacher) {
        Session session = mySessionFactory.getCurrentSession();
        session.save(teacher);
    }

    @Override
    public void deleteTeacher(int teacherId) {
        Session session = mySessionFactory.getCurrentSession();
        Query q = session.createQuery("delete from teacher where teacher_id = :teacherid");
        q.setParameter("teacherid",teacherId);
        q.executeUpdate();
    }

    @Override
    public void updateTeacher(Teacher teacher) {
        Session session = mySessionFactory.getCurrentSession();
        session.update(teacher);
    }

}
