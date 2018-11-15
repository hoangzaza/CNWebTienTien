package com.nhom13.entity;

import javax.persistence.*;

@Entity(name = "lesson")
public class Lesson {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "lesson_id")
    private int lessonId;
    @Column(name = "lesson_name")
    private String lessonName;
    @Column(name = "lesson_content")
    private String lessonContent;
    @Column(name = "url_lesson")
    private String urlIconLesson;
    @Column(name = "url_slide")
    private String urlSlide;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private Course course;

    public Lesson() {
    }

    public Lesson(String lessonName, String lessonContent, String urlIconLesson, String urlSlide, Course course) {
        this.lessonName = lessonName;
        this.lessonContent = lessonContent;
        this.urlIconLesson = urlIconLesson;
        this.urlSlide = urlSlide;
        this.course = course;
    }

    public int getLessonId() {
        return lessonId;
    }

    public void setLessonId(int lessonId) {
        this.lessonId = lessonId;
    }

    public String getLessonName() {
        return lessonName;
    }

    public void setLessonName(String lessonName) {
        this.lessonName = lessonName;
    }

    public String getLessonContent() {
        return lessonContent;
    }

    public void setLessonContent(String lessonContent) {
        this.lessonContent = lessonContent;
    }

    public String getUrlIconLesson() {
        return urlIconLesson;
    }

    public void setUrlIconLesson(String urlIconLesson) {
        this.urlIconLesson = urlIconLesson;
    }

    public String getUrlSlide() {
        return urlSlide;
    }

    public void setUrlSlide(String urlSlide) {
        this.urlSlide = urlSlide;
    }

    public Course getCourse() {
        return course;
    }

    public void setCourse(Course course) {
        this.course = course;
    }
}
