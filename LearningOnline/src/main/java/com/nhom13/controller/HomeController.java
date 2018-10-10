package com.nhom13.controller;

import com.nhom13.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller(value = "/")
public class HomeController {

    @Autowired
    private UserDao userDao;

    @RequestMapping("/")
    @ResponseBody
    public String home(){
        System.out.println(userDao.getListUsers().size());
        System.out.println(userDao.findByUsername("anhptk").getPassword());
        return "Hello world";
    }
}
