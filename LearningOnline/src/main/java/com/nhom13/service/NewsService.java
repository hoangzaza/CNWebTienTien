package com.nhom13.service;

import com.nhom13.entity.News;

import java.util.List;

public interface NewsService {
    List<News> getListNews(int count);
}
