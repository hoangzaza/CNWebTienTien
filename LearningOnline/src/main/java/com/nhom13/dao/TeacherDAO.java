package com.nhom13.dao;

import com.nhom13.entity.Teacher;

import java.util.List;

public interface TeacherDAO{
    List<Teacher> getListTeacher();
    Teacher getTeacherByID(int teacherID);
    List<Teacher> getListTeacherLimit(int start);
    void insertTeacher(Teacher teacher);
    void deleteTeacher(int teacherId);
    void updateTeacher(Teacher teacher);
}
