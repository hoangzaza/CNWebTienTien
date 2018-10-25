package com.nhom13.service.impl;


import com.nhom13.dao.GradeDAO;
import com.nhom13.entity.Class;
import com.nhom13.service.GradleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GradleServiceImpl implements GradleService {

    @Autowired
    private GradeDAO gradeDAO;
    @Override
    public List<Class> getListClass() {
        return gradeDAO.getListClass();
    }
}
