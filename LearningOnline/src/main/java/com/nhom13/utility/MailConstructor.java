package com.nhom13.utility;

import com.nhom13.entity.User;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;

import java.util.Locale;

public class MailConstructor {
    private MailSender mailSender;
    public MailConstructor(){

    }

    public void setMailSender(MailSender mailSender) {
        this.mailSender = mailSender;
    }

    public static SimpleMailMessage constructResetTokenEmail(String contextPath, String token, User user){
        String url = contextPath + "/newUser?token="+token;
        String message = "\nPlease click on this link to verify your email and edit your personal information. Your password is: \n";
        SimpleMailMessage email = new SimpleMailMessage();
        email.setFrom("nguyenvanhoangcntt2.2@gmail.com");
        email.setTo(user.getEmail());
        email.setSubject("Learning Online");
        email.setText(url+message);
        return email;
    }

    public void sendSimpleMail(SimpleMailMessage simpleMailMessage){
        mailSender.send(simpleMailMessage);
    }
}
