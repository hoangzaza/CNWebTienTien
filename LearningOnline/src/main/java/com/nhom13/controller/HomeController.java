package com.nhom13.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller(value = "/")
public class HomeController {

    @RequestMapping("/")
    @ResponseBody
    public String home(){
        return "Hello world";
    }
}
