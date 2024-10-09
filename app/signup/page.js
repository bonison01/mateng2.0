import React from 'react';
import styles from './signup.module.css';

const SignupPage = () => {
    return (
        <div className={styles.container}>
            <h1>Sign Up</h1>
            <form className={styles.form}>
                <label htmlFor="name" className={styles.label}>Name:</label>
                <input type="text" id="name" name="name" className={styles.input} required />

                <label htmlFor="email" className={styles.label}>Email:</label>
                <input type="email" id="email" name="email" className={styles.input} required />

                <label htmlFor="password" className={styles.label}>Password:</label>
                <input type="password" id="password" name="password" className={styles.input} required />

                <button type="submit" className={styles.button}>Sign Up</button>
            </form>
            <p>Already have an account? <a href="/login">Log in</a></p>
        </div>
    );
};

export default SignupPage;
