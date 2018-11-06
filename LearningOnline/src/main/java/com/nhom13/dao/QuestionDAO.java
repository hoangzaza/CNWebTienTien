package com.nhom13.dao;

import com.nhom13.entity.Question;

import java.util.List;

public interface QuestionDAO {
    List<Question> getListQuestionByPage(int examID, int page, int total);
    int getQuestionCount(int examId);
    List<Integer> getListAnswer(int questionId);
}
