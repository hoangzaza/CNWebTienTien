package com.nhom13.dao.impl;

import com.nhom13.dao.NewsDAO;
import com.nhom13.entity.Class;
import com.nhom13.entity.News;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


import java.util.ArrayList;
import java.util.List;

@Repository
@Transactional
public class NewsDAOImpl implements NewsDAO {

    @Autowired
    private SessionFactory mySessionFactory;

    @Override
    public List<News> getListNews(int count) {
        Session session = mySessionFactory.getCurrentSession();
        String sql = "select * from news order by news_id desc limit " + count;
        SQLQuery query = session.createSQLQuery(sql);
        List<Object[]> rows = query.list();
        List<News> result = new ArrayList<>();
        for(Object[] row  : rows){
            News news = new News();
            news.setNewsId(Integer.parseInt(row[0]+""));
            news.setNewsContent(row[1]+"");
            news.setUrlNews(row[2]+"");
            result.add(news);
        }
        return result;
    }
}
