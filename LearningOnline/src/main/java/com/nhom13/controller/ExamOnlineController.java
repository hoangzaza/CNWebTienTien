package com.nhom13.controller;

import com.nhom13.entity.Exam;
import com.nhom13.service.ExamService;
import com.nhom13.service.GradleService;
import com.nhom13.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/examtest")
public class ExamOnlineController {

    @Autowired
    private GradleService gradleService;

    @Autowired
    private ExamService examService;

    @Autowired
    private SubjectService subjectService;

    @RequestMapping(value = "", method = RequestMethod.GET)
    public String examHome(Model model){
        model.addAttribute("classes",gradleService.getListClass());
        model.addAttribute("exams",examService.getListExam());
        model.addAttribute("subjects",subjectService.getListSubjects());
        return "examHome";
    }

    @RequestMapping(value = "", method = RequestMethod.POST)
    public String examHomePost(@RequestParam(value = "classid", required = false) int classid ,
                               @RequestParam(value = "subjectid",required = false) int subjectid, Model model){
        model.addAttribute("classes",gradleService.getListClass());
        model.addAttribute("subjects",subjectService.getListSubjects());
        model.addAttribute("exams",examService.getListExamByClassSubject(classid,subjectid));
        return "examHome";
    }
}
