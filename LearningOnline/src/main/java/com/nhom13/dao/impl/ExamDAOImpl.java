package com.nhom13.dao.impl;

import com.nhom13.dao.ExamDAO;
import com.nhom13.entity.Exam;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Repository
@Transactional
public class ExamDAOImpl implements ExamDAO {
    @Autowired
    SessionFactory mySessionFactory;

    @Override
    public List<Exam> getListExam() {
        String hql = "from Exam";
        Session session = mySessionFactory.getCurrentSession();
        return session.createQuery(hql).getResultList();
    }

    @Override
    public List<Exam> getListExamByClassSubject(int classID, int subjectID) {
        Session session = mySessionFactory.getCurrentSession();
        String sql = "SELECT e.exam_id, e.exam_name, e.exam_time FROM exam e,class_subject c WHERE e.class_subject_id = c.class_subject_id AND c.class_id= :classid AND c.subject_id = :subjectid ";
        SQLQuery query = session.createSQLQuery(sql);
        query.setParameter("classid",classID);
        query.setParameter("subjectid",subjectID);
        List<Object[]> rows = query.list();
        List<Exam> result = new ArrayList<>();
        for(Object[] row  : rows){
            Exam exam = new Exam();
            exam.setExamId(Integer.parseInt(row[0]+""));
            exam.setExamName(row[1]+"");
            exam.setExamTime(Integer.parseInt(row[2]+""));
            result.add(exam);
        }
        return result;
    }


}
