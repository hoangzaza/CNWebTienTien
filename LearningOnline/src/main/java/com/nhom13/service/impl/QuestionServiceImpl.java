package com.nhom13.service.impl;

import com.nhom13.dao.QuestionDAO;
import com.nhom13.entity.Question;
import com.nhom13.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    private QuestionDAO questionDAO;

    @Override
    public List<Question> getListQuestionByPage(int examID, int page, int total) {
        return questionDAO.getListQuestionByPage(examID,page,total);
    }

    @Override
    public int getQuestionCount(int examId) {
        return questionDAO.getQuestionCount(examId);
    }

    @Override
    public List<Integer> getListAnswers(int questionId) {
        return questionDAO.getListAnswer(questionId);
    }


}
