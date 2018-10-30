package com.nhom13.controller;

import com.nhom13.service.ExamService;
import com.nhom13.service.GradleService;
import com.nhom13.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/quiz")
public class QuizControler {
    @Autowired
    private GradleService gradleService;

    @Autowired
    private ExamService examService;

    @Autowired
    private SubjectService subjectService;

    @RequestMapping("/{examid}")
    public String getQuiz(Model model, @PathVariable("examid") int examId){
        model.addAttribute("exam",examService.getExamById(examId));
        return "quiz";
    }

}
