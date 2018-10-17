package com.nhom13.dao;

import com.nhom13.entity.User;

import java.util.List;

public interface UserDAO {
    List<User> getListUsers();
    User findByUsername(String username);
    User findByEmail(String email);
    void addUser(User user);
}
