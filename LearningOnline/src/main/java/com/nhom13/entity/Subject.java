package com.nhom13.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity(name = "subject")
public class Subject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "subject_id")
    private int subjectId;
    @Column(name = "subject_name")
    private String subjectName;

    @OneToMany(mappedBy = "subject", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JsonIgnore
    private Set<ClassSubject> classSubjects;

    public Subject() {
    }

    public Subject(String subjectName, Set<ClassSubject> classSubjects, Set<Teacher> teachers) {
        this.subjectName = subjectName;
        this.classSubjects = classSubjects;
        this.teachers = teachers;
    }

    public Set<ClassSubject> getClassSubjects() {
        return classSubjects;
    }

    public void setClassSubjects(Set<ClassSubject> classSubjects) {
        this.classSubjects = classSubjects;
    }

    public Set<Teacher> getTeachers() {
        return teachers;
    }

    public void setTeachers(Set<Teacher> teachers) {
        this.teachers = teachers;
    }

    @OneToMany(mappedBy = "subject", cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JsonIgnore
    private Set<Teacher> teachers;

    public int getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(int subjectId) {
        this.subjectId = subjectId;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }
}
