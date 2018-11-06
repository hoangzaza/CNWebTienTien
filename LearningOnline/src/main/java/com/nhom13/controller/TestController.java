package com.nhom13.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;

@Controller

public class TestController {

    private static final String UPLOAD_DIRECTORY ="/resources/images";

    @RequestMapping("/upload")
    public String upload(){
        return "upload";
    }

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
        return "success";

    }
}
