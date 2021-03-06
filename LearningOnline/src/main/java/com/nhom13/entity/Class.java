package com.nhom13.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity(name = "class")
public class Class {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "class_id")
    private int classId;
    @Column(name = "class_name")
    private String className;

    public Set<ClassSubject> getClassSubjects() {
        return classSubjects;
    }

    public void setClassSubjects(Set<ClassSubject> classSubjects) {
        this.classSubjects = classSubjects;
    }

    @OneToMany(mappedBy = "c", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JsonIgnore
    @OrderBy()
    private Set<ClassSubject> classSubjects;

    public int getClassId() {
        return classId;
    }

    public void setClassId(int classId) {
        this.classId = classId;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }
}
