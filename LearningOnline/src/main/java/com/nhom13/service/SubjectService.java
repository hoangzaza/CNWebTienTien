package com.nhom13.service;

import com.nhom13.entity.Subject;

import java.util.List;

public interface SubjectService {
    List<Subject> getListSubjects();
    Subject getSubjectById(int id);
}
