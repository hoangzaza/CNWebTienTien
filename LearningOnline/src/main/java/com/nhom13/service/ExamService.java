package com.nhom13.service;

import com.nhom13.entity.Exam;

import java.util.List;

public interface ExamService {
    List<Exam> getListExam();
    List<Exam> getListExamByClassSubject(int classID, int subjectID);
    Exam getExamById(int id);
}
