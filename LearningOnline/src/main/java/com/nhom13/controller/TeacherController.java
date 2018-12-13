package com.nhom13.controller;

import com.nhom13.entity.ClassSubject;
import com.nhom13.entity.Course;
import com.nhom13.entity.Teacher;
import com.nhom13.service.ClassSubjectService;
import com.nhom13.service.GradleService;
import com.nhom13.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Set;

@Controller
@RequestMapping("/teacher")
public class TeacherController {
    @Autowired
    private GradleService gradleService;

    @Autowired
    private ClassSubjectService classSubjectService;

    @Autowired
    private TeacherService teacherService;


    @RequestMapping()
    public String getListTeacher(Model model){
        model.addAttribute("classes",gradleService.getListClass());
        List<Teacher> teachers = teacherService.getListTeachers();
        model.addAttribute("teachers",teachers);
        return "teacher";
    }

    @RequestMapping(value = "{teacherID}")
    public String getTeacherDetail(Model model, @PathVariable(name = "teacherID") int teacherID){
        model.addAttribute("classes",gradleService.getListClass());
        Teacher teacher = teacherService.getTeacherByID(teacherID);
        model.addAttribute("teacher",teacher);
        model.addAttribute("courses",teacher.getCourses());
        return "teacherDetail";
    }
}
