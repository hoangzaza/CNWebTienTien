package com.nhom13.dao.impl;

import com.nhom13.dao.PasswordResetTokenDAO;
import com.nhom13.entity.security.PasswordResetToken;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional
public class PasswordResetTokenDAOImpl implements PasswordResetTokenDAO {
    @Autowired
    private SessionFactory mySessionFactory;

    @Override
    public void saveToken(PasswordResetToken passwordResetToken) {
        Session session = mySessionFactory.getCurrentSession();
        session.save(passwordResetToken);

    }
}
