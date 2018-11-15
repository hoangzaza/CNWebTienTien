package com.nhom13.entity;

import javax.persistence.*;
import java.util.Set;

@Entity(name = "teacher")
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "teacher_id")
    private int teacherId;
    @Column(name = "teacher_name")
    private String teacherName;
    @Column(name = "url_icon")
    private String urlIcon;
    @Column(name = "position")
    private String position;
    @Column(name = "work_place")
    private String workPlace;
    @Column(name = "email")
    private String email;
    @Column(name = "description")
    private String description;

    @ManyToOne
    @JoinColumn(name = "subject_id")
    private Subject subject;

    @OneToMany(mappedBy = "teacher",cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    private Set<Course> courses;


    public int getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(int teacherId) {
        this.teacherId = teacherId;
    }

    public String getTeacherName() {
        return teacherName;
    }

    public void setTeacherName(String teacherName) {
        this.teacherName = teacherName;
    }

    public String getUrlIcon() {
        return urlIcon;
    }

    public void setUrlIcon(String urlIcon) {
        this.urlIcon = urlIcon;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getWorkPlace() {
        return workPlace;
    }

    public void setWorkPlace(String workPlace) {
        this.workPlace = workPlace;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }

    public Teacher(String teacherName, String urlIcon, String position, String workPlace, String email, String description, Subject subject) {
        this.teacherName = teacherName;
        this.urlIcon = urlIcon;
        this.position = position;
        this.workPlace = workPlace;
        this.email = email;
        this.description = description;
        this.subject = subject;
    }

    public Teacher() {
    }
}
