package com.nhom13.dao;

import com.nhom13.entity.Subject;

import java.util.List;

public interface SubjectDAO {
    List<Subject> getListSubjects();
    Subject getSubjectById(int id);

}
