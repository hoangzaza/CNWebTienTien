package com.nhom13.service.impl;

import com.nhom13.dao.CourseDAO;
import com.nhom13.entity.Course;
import com.nhom13.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseDAO courseDAO;

    @Override
    public Course getCourseById(int courseId) {
        return courseDAO.getCourseById(courseId);
    }
}
