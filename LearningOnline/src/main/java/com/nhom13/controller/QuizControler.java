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
import java.util.ArrayList;
import java.util.Collections;
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
            @RequestParam("remaintime") int remainTime,
            @RequestParam("totalpage") int totalpage, Model model, HttpServletRequest request){
        if(currentPage < totalpage) {
            request.getSession().setAttribute("doexam",doexam);
            model.addAttribute("remaintime",remainTime);
            return "forward:/quiz/" + examid + "/" + (currentPage + 1);
        }
        String[] array = doexam.split(",", -1);
        List<Integer> question = new ArrayList<>();
        for(int i = 0; i < (array.length-1);i++){
            String qa = array[i];
            if(!question.contains(Integer.parseInt(qa.substring(0,qa.indexOf('_'))))){
                question.add(Integer.parseInt(qa.substring(0,qa.indexOf('_'))));
            };
        }
        int point = 0;
        for (int j = 0 ; j < question.size();j++){
            List<Integer> answers = new ArrayList<>();
            for(int i = 0 ; i < array.length-1; i ++){
                if(array[i].substring(0,array[i].indexOf('_')).equals(question.get(j)+"")){
                    answers.add(Integer.parseInt(array[i].substring(array[i].indexOf('_')+1)));
                }
            }
            List<Integer> answerTrue = questionService.getListAnswers(question.get(j));
            if(this.equalLists(answers,answerTrue)){
                point++;
            }
        }
        model.addAttribute("point",point);
        request.getSession().invalidate();
        return "quizResult";
    }
    private boolean equalLists(List<Integer> one, List<Integer> two){
        if (one == null && two == null){
            return true;
        }

        if((one == null && two != null)
                || one != null && two == null
                || one.size() != two.size()){
            return false;
        }

        //to avoid messing the order of the lists we will use a copy
        //as noted in comments by A. R. S.
        one = new ArrayList<Integer>(one);
        two = new ArrayList<Integer>(two);

        Collections.sort(one);
        Collections.sort(two);
        return one.equals(two);
    }

}
