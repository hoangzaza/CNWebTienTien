package com.nhom13.utility;

import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;

public class MailConstructor {
    private MailSender mailSender;
    public MailConstructor(){

    }

    public void setMailSender(MailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendSimpleMail(String from, String to, String subject, String msg){
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setFrom(from);
        mailMessage.setTo(to);
        mailMessage.setSubject(subject);
        mailMessage.setText(msg);
        mailSender.send(mailMessage);
    }
}
