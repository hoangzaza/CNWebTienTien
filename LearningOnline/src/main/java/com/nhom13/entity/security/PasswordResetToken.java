package com.nhom13.entity.security;


import com.nhom13.entity.User;

import javax.persistence.*;
import java.util.Calendar;
import java.util.Date;

@Entity(name = "password_reset_token")
public class PasswordResetToken {
    private static final int EXPIRATION = 60 * 24;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private int id;
    @Column(name = "token")
    private String token;

    @OneToOne(targetEntity = User.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable=false, name="user_id")
    private User user;

    @Column(name = "expiry_date")
    private Date expiryDate;
    public PasswordResetToken(){}

    public PasswordResetToken(final String token, final User user) {
        super ();

        this.token = token;
        this.user = user;
        this.expiryDate = calculateExpiryDate(EXPIRATION);
    }

    private Date calculateExpiryDate (final int expiryTimeInMinutes) {
        final Calendar cal = Calendar.getInstance();
        cal.setTimeInMillis(new Date().getTime());
        cal.add(Calendar.MINUTE, expiryTimeInMinutes);
        return new Date(cal.getTime().getTime());
    }

    public void updateToken(final String token) {
        this.token = token;
        this.expiryDate = calculateExpiryDate(EXPIRATION);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Date getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(Date expiryDate) {
        this.expiryDate = expiryDate;
    }

    public static int getExpiration() {
        return EXPIRATION;
    }

    @Override
    public String toString() {
        return "PasswordResetToken [id=" + id + ", token=" + token + ", user=" + user + ", expiryDate=" + expiryDate
                + "]";
    }

}
