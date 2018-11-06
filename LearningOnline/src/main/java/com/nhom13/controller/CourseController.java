package com.nhom13.controller;

import com.nhom13.entity.Class;
import com.nhom13.entity.ClassSubject;
import com.nhom13.entity.Subject;
import com.nhom13.service.GradleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Controller
@RequestMapping("/course")
public class CourseController {

    @Autowired
    private GradleService gradleService;

    @RequestMapping("/{gradle}/${subject}")
    public String getGradleListCourse(Model model, @PathVariable("gradle") int gradle, @PathVariable("subject") int subjectId){
        Class a = gradleService.getClassByID(gradle);
//        System.out.println(a.getClassSubjects().iterator().next().getSubject().getSubjectName());
        Set<ClassSubject> classSubjects = a.getClassSubjects();
        List<Subject> listSubjects = new ArrayList<Subject>();
        for (ClassSubject classSubject : classSubjects){
            listSubjects.add(classSubject.getSubject());
        }
        model.addAttribute("classes",gradleService.getListClass());
        model.addAttribute("subjects",listSubjects);
        return "course";
    }
}
