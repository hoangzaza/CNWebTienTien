package com.nhom13.controller;

import com.nhom13.entity.User;
import com.nhom13.entity.security.Role;
import com.nhom13.entity.security.UserRole;
import com.nhom13.service.ExamService;
import com.nhom13.service.GradleService;
import com.nhom13.service.UserService;
import com.nhom13.utility.MailConstructor;
import com.nhom13.utility.SecurityUtility;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Controller(value = "/")
public class HomeController {

    @Autowired
    private UserService userService;

    @Autowired
    private ExamService examService;

    @Autowired
    private GradleService gradleService;

    @RequestMapping("/login")
    public String login(){
        return "login";
    }

    @RequestMapping("/")
    public String home(Model model){
        model.addAttribute("classes",gradleService.getListClass());
        return "home";
    }

    @RequestMapping(value = "/register", method = RequestMethod.GET)
    public String register(){
        return "register";
    }

    @RequestMapping(value = "/about", method = RequestMethod.GET)
    public String about(){
        return "about";
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String registerPost(HttpServletRequest request,
                               @ModelAttribute("username") String username,
                               @ModelAttribute("email") String email,
                               @ModelAttribute("password") String password,
                               Model model){
        model.addAttribute("email", email);
        model.addAttribute("username",username);
        if(userService.findByUsername(username)!= null){
            model.addAttribute("usernameExists",true);
            return "register";
        }

        if(userService.findByEmail(email) != null){
            model.addAttribute("emailExists",true);
            return "register";
        }

        User user = new User();
        user.setUsername(username);
        user.setEmail(email);
        String encryptedPassword = SecurityUtility.passwordEncoder().encode(password);
        user.setPassword(encryptedPassword);

        Role role = new Role();
        role.setRoleId(1);
        role.setRoleName("USER");

        Set<UserRole> userRoles = new HashSet<>();
        userRoles.add(new UserRole(user,role));
        userService.createUser(user,userRoles);

        String token = UUID.randomUUID().toString();
        userService.createPasswordResetTokenForUser(user, token);

        String appUrl = "http://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath();

        SimpleMailMessage simpleMailMessage = MailConstructor.constructResetTokenEmail(appUrl, token, user);
        Resource r=new ClassPathResource("IoC.xml");
        BeanFactory b=new XmlBeanFactory(r);
        MailConstructor m=(MailConstructor) b.getBean("mailMail");
        m.sendSimpleMail(simpleMailMessage);

        model.addAttribute("emailSent", "true");
        return "register";
    }

    @RequestMapping("/user")
    @PreAuthorize("hasAuthority('USER')")
    public String teacher(Principal principal){
        User user = userService.findByUsername(principal.getName());
        return "teacher";
    }

    @RequestMapping("/admin")
    @PreAuthorize("hasAuthority('ADMIN')")
    public String admin(){
        return "register";
    }
}
