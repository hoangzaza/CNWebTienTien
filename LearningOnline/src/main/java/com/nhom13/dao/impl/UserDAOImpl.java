package com.nhom13.dao.impl;

import com.nhom13.dao.UserDAO;
import com.nhom13.entity.User;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.Query;
import java.util.List;

@Repository
@Transactional
public class UserDAOImpl implements UserDAO {

    @Autowired
    SessionFactory mySessionFactory;

    public List<User> getListUsers(){
        String hql = "from User";
        Session session = mySessionFactory.getCurrentSession();
        List<User> users = session.createQuery(hql).getResultList();
        return users;
    }

    public User findByUsername(String username){
        String hql = "from User where username=:name";
        Session session = mySessionFactory.getCurrentSession();
        Query query = session.createQuery(hql);
        query.setParameter("name",username);
        User user;
        try {
             user = (User) query.getSingleResult();
        }catch (Exception ex){
            ex.printStackTrace();
            return null;
        }
        return user;
    }

    @Override
    public User findByEmail(String email) {
        String hql = "from User where email=:email";
        Session session = mySessionFactory.getCurrentSession();
        Query query = session.createQuery(hql);
        query.setParameter("email",email);
        User user;
        try {
            user = (User) query.getSingleResult();
        }catch (Exception ex){
            ex.printStackTrace();
            return null;
        }
        return user;
    }

    @Override
    public void addUser(User user) {
        Session session = mySessionFactory.getCurrentSession();
        session.save(user);
    }
}
