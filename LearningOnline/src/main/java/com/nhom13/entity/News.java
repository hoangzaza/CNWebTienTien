package com.nhom13.entity;

import javax.persistence.*;

@Entity(name = "news")
public class News {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "news_id")
    private int newsId;
    @Column(name = "news_content")
    private String newsContent;
    @Column(name = "url_news")
    private String urlNews;

    public int getNewsId() {
        return newsId;
    }

    public void setNewsId(int newsId) {
        this.newsId = newsId;
    }

    public String getNewsContent() {
        return newsContent;
    }

    public void setNewsContent(String newsContent) {
        this.newsContent = newsContent;
    }

    public String getUrlNews() {
        return urlNews;
    }

    public News() {
    }

    public void setUrlNews(String urlNews) {
        this.urlNews = urlNews;
    }

    public News(int newsId, String newsContent, String urlNews) {
        this.newsId = newsId;
        this.newsContent = newsContent;
        this.urlNews = urlNews;
    }


}
