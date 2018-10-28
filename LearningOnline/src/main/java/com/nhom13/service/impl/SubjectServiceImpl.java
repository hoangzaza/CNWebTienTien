package com.nhom13.service.impl;

import com.nhom13.dao.SubjectDAO;
import com.nhom13.entity.Subject;
import com.nhom13.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubjectServiceImpl implements SubjectService {

    @Autowired
    private SubjectDAO subjectDAO;

    @Override
    public List<Subject> getListSubjects() {
        return subjectDAO.getListSubjects();
    }
}
