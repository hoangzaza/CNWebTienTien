package com.nhom13.service.impl;

import com.nhom13.dao.ClassSubjectDAO;
import com.nhom13.entity.ClassSubject;
import com.nhom13.service.ClassSubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClassSubjectServiceImpl implements ClassSubjectService {

    @Autowired
    ClassSubjectDAO classSubjectDAO;

    @Override
    public ClassSubject getClassSubject(int classId, int subjectId) {
        return classSubjectDAO.getClassSubject(classId,subjectId);
    }
}
