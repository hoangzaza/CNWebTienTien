package com.nhom13.entity;

import javax.persistence.*;

@Entity(name = "question_exam")
public class QuestionExam {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "question_exam_id")
    private int questionExamId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "question_id")
    private Question question;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "exam_id")
    private Exam exam;

    public int getQuestionExamId() {
        return questionExamId;
    }

    public void setQuestionExamId(int questionExamId) {
        this.questionExamId = questionExamId;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public Exam getExam() {
        return exam;
    }

    public void setExam(Exam exam) {
        this.exam = exam;
    }

    public QuestionExam() {
    }

    public QuestionExam(Question question, Exam exam) {
        this.question = question;
        this.exam = exam;
    }
}
