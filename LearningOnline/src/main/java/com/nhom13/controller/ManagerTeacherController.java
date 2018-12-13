package com.nhom13.controller;

import com.nhom13.entity.Subject;
import com.nhom13.entity.Teacher;
import com.nhom13.service.SubjectService;
import com.nhom13.service.TeacherService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.multipart.commons.CommonsMultipartFile;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Iterator;
import java.util.List;

@Controller
@RequestMapping("/managementTeacher")
public class ManagerTeacherController {

    @Autowired
    private TeacherService teacherService;

    @Autowired
    private SubjectService subjectService;



    @GetMapping
    public String Default(Model model){
        List<Teacher> listLimit = teacherService.getListTeacherLimit(0);
        List<Teacher> allTeachers = teacherService.getListTeachers();
        model.addAttribute("subjects",subjectService.getListSubjects());
        model.addAttribute("teacher1",teacherService.getListTeacherLimit(0));
        model.addAttribute("allteachers",allTeachers);
        double totalPage = Math.ceil(allTeachers.size()*1.0/5);
        model.addAttribute("totalpage",totalPage);
        return "addteacher";
    }

    @PostMapping(path = "/getListTeacherLimit",produces = "text/plain;charset=utf-8")
    @ResponseBody
    public String getListTeacherLimit(@RequestParam("startitem") int start){
        String html = "";
        List<Teacher> listTeacherLimit = teacherService.getListTeacherLimit(start);
        for(Teacher teacher : listTeacherLimit){
            html += "<tr>";
            html += "<td><input type=\"checkbox\" value=\""+teacher.getTeacherId()+"\"></td>";
            html += "<td>"+teacher.getTeacherName()+"</td>";
            html += "<td>"+teacher.getPosition()+"</td>";
            html += "<td>"+teacher.getWorkPlace()+"</td>";
            html += "<td>"+teacher.getEmail()+"</td>";
            html += "<td>"+teacher.getSubject().getSubjectName()+"</td>";
            html += "  <td class=\"edit\"><i class=\"fa fa-adjust\"></i></td>";
            html += "</tr>";
        }
        return html;
    }

    @PostMapping(path = "/deleteTeacher")
    @ResponseBody
    public String deleteTeacher(@RequestParam("teacherid") int start){
        teacherService.deleteTeacher(start);
        return "";
    }

    private static final String UPLOAD_DIRECTORY ="/resources/images";

    @RequestMapping(value="/upload",method=RequestMethod.POST)
    @ResponseBody
    public String uploadFile(@RequestParam CommonsMultipartFile file, HttpSession session){
        ServletContext context = session.getServletContext();
        String path = context.getRealPath(UPLOAD_DIRECTORY);
        String filename = file.getOriginalFilename();

        System.out.println(path+" "+filename);
        try{
            byte barr[]=file.getBytes();

            File file1 = new File(path+"/"+filename);
            file1.createNewFile();
            BufferedOutputStream bout=new BufferedOutputStream(
                    new FileOutputStream(file1));
            bout.write(barr);
            bout.flush();
            bout.close();

        }catch(Exception e){return "Exception"+e.toString();}
        return "\\resources\\images\\"+filename;

    }

    @RequestMapping(value="/addTeacher",method=RequestMethod.POST)
    public String addTeacher(@RequestParam(name = "teacher") String teacher){
        JSONObject object = new JSONObject(teacher);
        Teacher teacher1 = new Teacher();
        teacher1.setTeacherName(object.getString("teacher_name"));
        teacher1.setPosition(object.getString("position"));
        teacher1.setWorkPlace(object.getString("workplace"));
        teacher1.setDescription(object.getString("description"));
        Subject subject = subjectService.getSubjectById(Integer.parseInt(object.getString("subject")));
        teacher1.setSubject(subject);
        teacher1.setEmail(object.getString("email"));
        teacher1.setUrlIcon(object.getString("url_icon"));
        teacherService.insertTeacher(teacher1);
        return "";
    }

    @RequestMapping(value="/updateTeacher",method=RequestMethod.POST)
    public String updateTeacher(@RequestParam(name = "teacher") String teacher){
        JSONObject object = new JSONObject(teacher);
        Teacher teacher1 = new Teacher();
        teacher1.setTeacherId(object.getInt("teacher_id"));
        teacher1.setTeacherName(object.getString("teacher_name"));
        teacher1.setPosition(object.getString("position"));
        teacher1.setWorkPlace(object.getString("workplace"));
        teacher1.setDescription(object.getString("description"));
        Subject subject = subjectService.getSubjectById(Integer.parseInt(object.getString("subject")));
        teacher1.setSubject(subject);
        teacher1.setEmail(object.getString("email"));
        teacher1.setUrlIcon(object.getString("url_icon"));
        teacherService.updateTeacher(teacher1);
        return "";
    }
}
