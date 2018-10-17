package com.nhom13.service;

import com.nhom13.entity.User;
import com.nhom13.entity.security.UserRole;

import java.util.List;
import java.util.Set;

public interface UserService {
    List<User> getListUsers();
    User findByUsername(String username);
    User findByEmail(String email);
    User createUser(User user, Set<UserRole> userRoles);
    void createPasswordResetTokenForUser(User user,String token);
}
