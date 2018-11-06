package com.nhom13.service;

import com.nhom13.entity.Question;

import java.util.List;

public interface QuestionService {
    List<Question> getListQuestionByPage(int examID, int page, int total);
    int getQuestionCount(int examId);
    List<Integer> getListAnswers(int questionId);
}
