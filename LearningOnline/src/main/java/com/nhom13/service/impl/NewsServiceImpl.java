package com.nhom13.service.impl;

import com.nhom13.dao.NewsDAO;
import com.nhom13.entity.News;
import com.nhom13.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsServiceImpl implements NewsService {

    @Autowired
    private NewsDAO newsDAO;

    @Override
    public List<News> getListNews(int count) {
        return newsDAO.getListNews(count);
    }
}
