package com.nhom13.service.impl;

import com.nhom13.dao.UserDAO;
import com.nhom13.dao.impl.UserDAOImpl;
import com.nhom13.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserSecurityService implements UserDetailsService {
    @Autowired
    private UserDAO userDao;
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        User user = userDao.findByUsername(s);
        if(null == user){
            throw new UsernameNotFoundException("Username not found");
        }
        return user;
    }
}
