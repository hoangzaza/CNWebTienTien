package com.nhom13.controller;

import com.nhom13.entity.Question;
import com.nhom13.service.ExamService;
import com.nhom13.service.GradleService;
import com.nhom13.service.QuestionService;
import com.nhom13.service.SubjectService;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Controller
@RequestMapping("/quiz")
public class QuizControler {
    @Autowired
    private GradleService gradleService;

    @Autowired
    private ExamService examService;

    @Autowired
    private SubjectService subjectService;

    @Autowired
    private QuestionService questionService;

    @RequestMapping("/{examid}/{pageid}")
    public String getQuiz(Model model, @PathVariable("examid") int examId,@PathVariable("pageid") int pageId){
        model.addAttribute("exam",examService.getExamById(examId));
        List<Question> questions = questionService.getListQuestionByPage(examId,pageId,5);
//        System.out.println(questionService.getQuestionCount(examId));
        int pageCount = ((int)Math.ceil(((float)questionService.getQuestionCount(examId)) /5));
        model.addAttribute("pagecount",pageCount);
        model.addAttribute("currentpage",pageId);
        model.addAttribute("questions",questions);
        return "quiz";
    }


    @RequestMapping(value = "/save",method = RequestMethod.POST)
    public String saveExam(@RequestParam("doexam") String doexam,@RequestParam("currentpage") int currentPage,
            @RequestParam("examid") int examid,
            @RequestParam("totalpage") int totalpage, Model model, HttpServletRequest request){
        request.getSession().setAttribute("doexam",doexam);
        if(currentPage < totalpage) {
            return "forward:/quiz/" + examid + "/" + (currentPage + 1);
        }
        String[] array = doexam.split(",", -1);


        return "home";
    }

}
