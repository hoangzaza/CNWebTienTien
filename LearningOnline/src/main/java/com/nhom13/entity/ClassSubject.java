package com.nhom13.entity;

import javax.persistence.*;
import java.util.Set;

@Entity(name = "class_subject")
public class ClassSubject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "class_subject_id")
    private int id;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "class_id")
    private Class c;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "subject_id")
    private Subject subject;

    @OneToMany(mappedBy = "classSubject")
    private Set<Exam> exams;

    public ClassSubject(Class c, Subject subject) {
        this.c = c;
        this.subject = subject;
    }

    public ClassSubject() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Class getC() {
        return c;
    }

    public void setC(Class c) {
        this.c = c;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }
}
