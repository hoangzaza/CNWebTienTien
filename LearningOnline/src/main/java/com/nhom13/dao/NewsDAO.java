package com.nhom13.dao;

import com.nhom13.entity.News;

import java.util.List;

public interface NewsDAO {
    List<News> getListNews(int count);
}
