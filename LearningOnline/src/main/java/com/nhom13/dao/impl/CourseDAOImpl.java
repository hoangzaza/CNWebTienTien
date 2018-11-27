package com.nhom13.dao.impl;

import com.nhom13.dao.CourseDAO;
import com.nhom13.entity.Course;
import com.nhom13.entity.Exam;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class CourseDAOImpl implements CourseDAO {

    @Autowired
    private SessionFactory mySessionFactory;

    @Override
    public Course getCourseById(int courseId) {
        String hql = "from course where course = :courseId";
        Session session = mySessionFactory.getCurrentSession();
        Course course = session.get(Course.class,courseId);
        return course;
    }
}
