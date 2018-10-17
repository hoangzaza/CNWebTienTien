package com.nhom13.dao;

import com.nhom13.entity.security.PasswordResetToken;

public interface PasswordResetTokenDAO {
    void saveToken(PasswordResetToken passwordResetToken);
}
