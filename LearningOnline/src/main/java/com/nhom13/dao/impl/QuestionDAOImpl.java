package com.nhom13.dao.impl;

import com.nhom13.dao.QuestionDAO;
import com.nhom13.entity.Answer;
import com.nhom13.entity.Question;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.Query;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Repository
@Transactional
public class QuestionDAOImpl implements QuestionDAO {

    @Autowired
    private SessionFactory mySessionFactory;

    @Override
    public List<Question> getListQuestionByPage(int examID, int page,int toal) {
        Session session = mySessionFactory.getCurrentSession();
        String sql = "select q.question_id,q.question_content from question q,question_exam qe, exam e where q.question_id = qe.question_id and qe.exam_id = e.exam_id and e.exam_id = :examId order by q.question_id";
        SQLQuery query = null;
        query = session.createSQLQuery(sql);
        query.setParameter("examId",examID);
        query.setFirstResult((page-1)*toal);
        query.setMaxResults(toal);
        List<Object[]> rows = query.list();
        List<Question> result = new ArrayList<>();
        for(Object[] row  : rows){
            Question exam = new Question();
            int questionId = Integer.parseInt(row[0]+"");
            exam.setQuestionId(questionId);
            exam.setQuestionContent(row[1]+"");
            exam.setAnswers(getListAnswers(questionId));
            result.add(exam);
        }
        return result;
    }

    public Set<Answer> getListAnswers(int questionId){
        Session session = mySessionFactory.getCurrentSession();
        String hql = "from answer where question_id = :questionId";
        Query query = session.createQuery(hql);
        query.setParameter("questionId",questionId);
        Set<Answer> answers = new HashSet<>(query.getResultList());
        return answers;
    }

    public int getQuestionCount(int examId){
        String hql = "select count(*) from question q,question_exam qe, exam e where q.question_id = qe.question_id and qe.exam_id = e.exam_id and e.exam_id = :examId order by q.question_id";
        Session session = mySessionFactory.getCurrentSession();
        Query query = session.createSQLQuery(hql);
        query.setParameter("examId",examId);
        return ((BigInteger)((org.hibernate.query.Query) query).uniqueResult()).intValue();
    }

    @Override
    public List<Integer> getListAnswer(int questionId) {
        String sql = "select a.answer_id from question q, answer a WHERE q.question_id = a.question_id and q.question_id = :questionId and a.is_true = 1";
        Session session = mySessionFactory.getCurrentSession();
        List<Integer> results = new ArrayList<>();
        SQLQuery query = session.createSQLQuery(sql);
        query.setParameter("questionId",questionId);
        List<Object> rows = query.list();
        for(Object row  : rows){
            int ans = Integer.parseInt(row+"");
            results.add(ans);
        }
        return results;
    }


}
