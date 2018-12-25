package com.nhom13.service;

import com.nhom13.entity.Teacher;

import java.util.List;

public interface TeacherService {
    List<Teacher> getListTeachers();
    Teacher getTeacherByID(int id);
    List<Teacher> getListTeacherLimit(int start);
    void deleteTeacher(int teacherId);
    void insertTeacher(Teacher teacher);
    void updateTeacher(Teacher teacher);
}
