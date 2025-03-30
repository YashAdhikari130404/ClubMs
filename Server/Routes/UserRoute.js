import express from "express";

import con from "../connection/db.js";

const router = express.Router()

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

export {router as UserRouter};