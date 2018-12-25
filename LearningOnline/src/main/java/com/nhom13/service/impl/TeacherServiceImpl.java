package com.nhom13.service.impl;

import com.nhom13.dao.TeacherDAO;
import com.nhom13.entity.Teacher;
import com.nhom13.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherServiceImpl implements TeacherService{

    @Autowired
    private TeacherDAO teacherDAO;

    public List<Teacher> getListTeachers(){
        return teacherDAO.getListTeacher();
    }
    public Teacher getTeacherByID(int id){
        return teacherDAO.getTeacherByID(id);
    }

    @Override
    public List<Teacher> getListTeacherLimit(int start) {
        return teacherDAO.getListTeacherLimit(start);
    }

    @Override
    public void deleteTeacher(int teacherId) {
        teacherDAO.deleteTeacher(teacherId);
    }

    @Override
    public void insertTeacher(Teacher teacher) {
        teacherDAO.insertTeacher(teacher);
    }

    @Override
    public void updateTeacher(Teacher teacher) {
        teacherDAO.updateTeacher(teacher);
    }
}
