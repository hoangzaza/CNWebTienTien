package com.nhom13.entity;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "exam")
public class Exam {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "exam_id")
    private int examId;
    @Column(name = "exam_name")
    private String examName;

    @Column(name = "exam_time")
    private int examTime;

    @OneToMany(mappedBy = "exam",cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    private Set<QuestionExam> questionExams;


    @ManyToOne
    @JoinColumn(name = "class_subject_id")
    private ClassSubject classSubject;

    public int getExamId() {
        return examId;
    }

    public void setExamId(int examId) {
        this.examId = examId;
    }

    public String getExamName() {
        return examName;
    }

    public void setExamName(String examName) {
        this.examName = examName;
    }

    public ClassSubject getClassSubject() {
        return classSubject;
    }

    public void setClassSubject(ClassSubject classSubject) {
        this.classSubject = classSubject;
    }

    public Exam() {
    }

    public Exam(String examName, int examTime, Set<QuestionExam> questionExams, ClassSubject classSubject) {
        this.examName = examName;
        this.examTime = examTime;
        this.questionExams = questionExams;
        this.classSubject = classSubject;
    }

    public Set<QuestionExam> getQuestionExams() {
        return questionExams;
    }

    public void setQuestionExams(Set<QuestionExam> questionExams) {
        this.questionExams = questionExams;
    }

    public int getExamTime() {
        return examTime;
    }

    public void setExamTime(int examTime) {
        this.examTime = examTime;
    }
}
