package com.nhom13.controller;

import com.nhom13.entity.Class;
import com.nhom13.entity.ClassSubject;
import com.nhom13.entity.Course;
import com.nhom13.entity.Subject;
import com.nhom13.service.ClassSubjectService;
import com.nhom13.service.CourseService;
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

    @Autowired
    private ClassSubjectService classSubjectService;

    @Autowired
    private CourseService courseService;

    @RequestMapping("/{gradle}/{subject}")
    public String getGradleListCourse(Model model, @PathVariable("gradle") int gradle, @PathVariable("subject") int subjectId){
        ClassSubject classSubject = classSubjectService.getClassSubject(gradle,subjectId);
        Set<Course> courses = classSubject.getCourses();
        model.addAttribute("classes",gradleService.getListClass());
        model.addAttribute("courses",courses);
        return "course";
    }

    @RequestMapping("/courseDetail/{courseId}")
    public String courseDetail(Model model,@PathVariable("courseId") int courseId){
        model.addAttribute("classes",gradleService.getListClass());
        model.addAttribute("course",courseService.getCourseById(courseId));

        return "courseDetail";
    }
}
