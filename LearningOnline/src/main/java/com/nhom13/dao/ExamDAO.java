package com.nhom13.dao;

import com.nhom13.entity.Exam;

import java.util.List;

public interface ExamDAO {
    List<Exam> getListExam();
    List<Exam> getListExamByClassSubject(int classID, int subjectID);
}
