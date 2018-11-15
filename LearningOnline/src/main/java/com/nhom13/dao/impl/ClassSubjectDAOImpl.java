package com.nhom13.dao.impl;

import com.nhom13.dao.ClassSubjectDAO;
import com.nhom13.dao.GradeDAO;
import com.nhom13.entity.Class;
import com.nhom13.entity.ClassSubject;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Iterator;
import java.util.Set;

@Repository
@Transactional
public class ClassSubjectDAOImpl implements ClassSubjectDAO {

    @Autowired
    private SessionFactory mySessionFactory;

    @Autowired
    private GradeDAO gradleDAO;
    @Override
    public ClassSubject getClassSubject(int classId, int subjectId) {
        Class a = gradleDAO.getClassByID(classId);
        Set<ClassSubject> classSubjects = a.getClassSubjects();
        ClassSubject classSubject = null;

        for (Iterator<ClassSubject> it = classSubjects.iterator();it.hasNext();){
            classSubject = it.next();
            if(classSubject.getSubject().getSubjectId() == subjectId)
                return classSubject;
        }
        return null;
    }
}
