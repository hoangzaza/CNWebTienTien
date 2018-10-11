package com.nhom13.controller;

import com.nhom13.dao.UserDao;
import com.nhom13.utility.MailConstructor;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller(value = "/")
public class HomeController {

    @RequestMapping("/login")
    public String login(){
        return "login";
    }

    @RequestMapping("/")
    public String home(){
        Resource r=new ClassPathResource("IoC.xml");
        BeanFactory b=new XmlBeanFactory(r);
        MailConstructor m=(MailConstructor) b.getBean("mailMail");
        String sender="hoangnv@vnext.com.vn";//write here sender gmail id
        String receiver="20141797@student.hust.edu.vn";//write here receiver id
        m.sendSimpleMail(sender,receiver,"hi","welcome");
        return "home";
    }
}
