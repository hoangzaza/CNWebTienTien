package com.nhom13.service.impl;

import com.nhom13.dao.PasswordResetTokenDAO;
import com.nhom13.dao.RoleDAO;
import com.nhom13.dao.UserDAO;
import com.nhom13.entity.User;
import com.nhom13.entity.security.PasswordResetToken;
import com.nhom13.entity.security.UserRole;
import com.nhom13.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDAO userDAO;

    @Autowired
    RoleDAO roleDAO;

    @Autowired
    PasswordResetTokenDAO passwordResetTokenDAO;

    @Override
    public List<User> getListUsers() {
        return userDAO.getListUsers();
    }

    @Override
    public User findByUsername(String username) {
        return userDAO.findByUsername(username);
    }

    @Override
    public User findByEmail(String email) {
        return userDAO.findByEmail(email);
    }

    @Override
    public User createUser(User user, Set<UserRole> userRoles) {
        User localUser = userDAO.findByUsername(user.getUsername());
        if(localUser != null){
            System.out.println("user already exists");
        }else {
            user.getUserRoles().addAll(userRoles);
            userDAO.addUser(user);
            return user;
        }
        return localUser;
    }

    @Override
    public void createPasswordResetTokenForUser(User user, String token) {
        PasswordResetToken myToken = new PasswordResetToken(token, user);
        passwordResetTokenDAO.saveToken(myToken);
    }
}
