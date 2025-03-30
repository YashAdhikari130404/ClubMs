import express from "express";
import con from "../connection/db.js";

const router = express.Router();

// LOGIN Endpoint
router.post("/user_login", (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM user WHERE email = ?";

    con.query(sql, [email], (err, result) => {
        if (err) return res.json({ loginStatus: false, error: "Database query error" });

        if (result.length === 0) {
            return res.json({ loginStatus: false, error: "Invalid email or password" });
        }

        const storedPassword = result[0].password;

        // Direct string comparison
        if (password === storedPassword) {
            return res.json({ loginStatus: true, message: "Login successful" });
        } else {
            return res.json({ loginStatus: false, error: "Invalid email or password" });
        }
    });
});

// SIGNUP Endpoint (without password hashing)
router.post("/user_signup", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({ signupStatus: false, error: "Email and password are required" });
    }

    // Check if user already exists
    const checkUserSql = "SELECT * FROM user WHERE email = ?";
    con.query(checkUserSql, [email], (err, result) => {
        if (err) return res.json({ signupStatus: false, error: "Database query error" });

        if (result.length > 0) {
            return res.json({ signupStatus: false, error: "Email already registered" });
        }

        // Insert new user without password hashing
        const insertUserSql = "INSERT INTO user (email, password) VALUES (?, ?)";
        con.query(insertUserSql, [email, password], (err) => {
            if (err) return res.json({ signupStatus: false, error: "Database insert error" });

            return res.json({ signupStatus: true, message: "User registered successfully" });
        });
    });
});

export { router as SignUpRouter };