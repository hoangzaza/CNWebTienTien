package com.nhom13.entity;

import javax.persistence.*;
import java.util.Set;

@Entity(name = "course")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "course_id")
    private int courseId;
    @Column(name = "course_name")
    private String courseName;
    @Column(name = "course_description")
    private String description;
    @Column(name = "url_icon")
    private String urlIcon;
    @Column(name = "time")
    private int time;

    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;

    @ManyToOne
    @JoinColumn(name = "subject_class_id")
    private ClassSubject classSubject;

    @OneToMany(mappedBy = "course",fetch = FetchType.EAGER)
    private Set<Lesson> lessons;

    public int getCourseId() {
        return courseId;
    }

    public void setCourseId(int courseId) {
        this.courseId = courseId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUrlIcon() {
        return urlIcon;
    }

    public void setUrlIcon(String urlIcon) {
        this.urlIcon = urlIcon;
    }

    public int getTime() {
        return time;
    }

    public void setTime(int time) {
        this.time = time;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }

    public ClassSubject getClassSubject() {
        return classSubject;
    }

    public void setClassSubject(ClassSubject classSubject) {
        this.classSubject = classSubject;
    }

    public Set<Lesson> getLessons() {
        return lessons;
    }

    public void setLessons(Set<Lesson> lessons) {
        this.lessons = lessons;
    }

    public Course() {
    }

    public Course(String courseName, String description, String urlIcon, int time, Teacher teacher, ClassSubject classSubject, Set<Lesson> lessons) {
        this.courseName = courseName;
        this.description = description;
        this.urlIcon = urlIcon;
        this.time = time;
        this.teacher = teacher;
        this.classSubject = classSubject;
        this.lessons = lessons;
    }
}
