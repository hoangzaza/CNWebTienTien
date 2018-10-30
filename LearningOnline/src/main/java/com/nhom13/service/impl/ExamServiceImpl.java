package com.nhom13.service.impl;

import com.nhom13.dao.ExamDAO;
import com.nhom13.entity.Exam;
import com.nhom13.service.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExamServiceImpl implements ExamService {
    @Autowired
    private ExamDAO examDAO;
    @Override
    public List<Exam> getListExam() {
        return examDAO.getListExam();
    }

    @Override
    public List<Exam> getListExamByClassSubject(int classID, int subjectID) {
        return examDAO.getListExamByClassSubject(classID,subjectID);
    }

    @Override
    public Exam getExamById(int id) {
        return examDAO.getExamById(id);
    }

}
