import express from "express";
import con from "../connection/db.js";
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

router.post("/adminlogin", (req, res) => { 
    const { email, password } = req.body;
    const sql = "SELECT * FROM admin WHERE email = ?";

    con.query(sql, [email], (err, result) => {
        if (err) return res.json({ loginStatus: false, error: "Database query error" });

        if (result.length === 0) {
            return res.json({ loginStatus: false, error: "Invalid email or password" });
        }

        const storedPassword = result[0].password; 

        if (password === storedPassword) {
            return res.json({ loginStatus: true, message: "Login successful" });
        } else {
            return res.json({ loginStatus: false, error: "Invalid email or password" });
        }
    });
});

//Clubs Manage backend
router.get('/clubs' , (req , res) => {
    const sql = "select * from clubs" ;
    con.query(sql , (err , result) => {
        if (err) return res.json({Status : false , Error : "Query error "})
        return res.json({Status : true , Result:result})
    })
})

router.post('/addclubs', (req, res) => {
    const { clubname, clubdesc, clubcode } = req.body.clubs;
    const sql = "INSERT INTO clubs (name, description, club_code) VALUES (?, ?, ?)";
    con.query(sql, [clubname, clubdesc, clubcode], (err, result) => {
        if (err) {
            console.log(err);
            return res.json({ Status: false, Error: "Club code must be unique or query error" });
        }
        return res.json({ Status: true });
    });
});


router.delete('/deleteclub/:id', (req, res) => {
    const clubId = req.params.id;
    const sql = "DELETE FROM clubs WHERE id = ?";
    con.query(sql, [clubId], (err, result) => {
        if (err) {
            return res.json({ Status: false, Error: "Query error" });
        }
        return res.json({ Status: true, Message: "Club deleted successfully" });
    });
});

//Members manage backend
router.post("/submitApplication", (req, res) => {
    const { name, email, phno, year, branch, division, interest, reason, club_code } = req.body;

    const sql = `INSERT INTO club_applications 
        (name, email, phno, year, branch, division, interest, reason, club_code, status) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')`;

    con.query(sql, [name, email, phno, year, branch, division, interest, reason, club_code], (err , result) => {
        if (err) return res.json({ Status: false, Error: "Error submitting application" });
        return res.json({Status: true , Message: "Application submitted successfully" });
    });
});

router.get("/pendingApplications", (req, res) => {
    const sql = `SELECT * FROM club_applications WHERE status = 'pending'`;
    con.query(sql, (err, result) => {
        if (err) return res.json({Status: false , error: "Error fetching applications" });
        return res.json({Status: true , Result : result});
    });
});

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.Admin_mail,
        pass: process.env.Admin_password, 
    },
});

router.post("/acceptApplication", (req, res) => {
    const { application_id } = req.body;
  
    const links = {
      nss: "https://chat.whatsapp.com/KYafF5pkCOB0tGPEI6lvmB",
      edc: "https://chat.whatsapp.com/KYafF5pkCOB0tGPEI6lvmB",
      pasc: "https://chat.whatsapp.com/KYafF5pkCOB0tGPEI6lvmB",
    };
  
    const getAppSql = "SELECT * FROM club_applications WHERE id = ?";
    con.query(getAppSql, [application_id], (err, result) => {
      if (err || result.length === 0) {
        return res.json({ Status: false, Error: "Application not found" });
      }
  
      const applicant = result[0];
      const whatsapp_link = links[applicant.club_code];
  
      if (!whatsapp_link) {
        return res.json({ Status: false, Error: "Invalid club_code. WhatsApp link not found." });
      }
  
      const insertSql = `INSERT INTO members (name, email, phno, year, branch, division, interest, club_code) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?);`;
  
      con.query(insertSql, [
        applicant.name, applicant.email, applicant.phno, applicant.year,
        applicant.branch, applicant.division, applicant.interest,
        applicant.club_code
      ], (err) => {
        if (err) return res.json({ Status: false, Error: "Failed to add member" });
  
        const updateSql = "UPDATE club_applications SET status = 'accepted' WHERE id = ?";
        con.query(updateSql, [application_id], (err) => {
          if (err) {
            return res.json({ Status: false, Error: "Failed to update application status" });
          }
        const transporter = nodemailer.createTransport({
            service: "gmail",
            secure: true,
            port: 465,
            auth: {
                user: process.env.Admin_mail,
                pass: process.env.Admin_password, 
            },
        });
        const mailOptions = {
            from: process.env.Admin_mail,
            to: applicant.email,
            subject: "🎉 Club Application Accepted!",
            html: `
                <p>Hi ${applicant.name},</p>
                <p>Congratulations! You've been selected for the <strong>${applicant.club_code.toUpperCase()}</strong> club.</p>
                <p>Join our WhatsApp group: <a href="${whatsapp_link}">${whatsapp_link}</a></p>
                <p>Welcome aboard! 🎊</p>
            `,
        };
          
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error("Error sending email:", err);
                return res.json({ Status: false, Error: "Member added but email not sent" });
            }
            console.log("Email sent:", info.response);
            return res.json({ Status: true, Message: "Application accepted & email sent" });
        });
          
        });
      });
    });
  });
  

router.post("/rejectApplication", (req, res) => {
    const { application_id } = req.body;

    const getAppSql = `SELECT * FROM club_applications WHERE id = ?`;
    con.query(getAppSql, [application_id], (err, result) => {
        if (err || result.length === 0) {
            return res.json({ Status: false, Error: "Application not found" });
        }

        const applicant = result[0];

        const updateSql = `UPDATE club_applications SET status = 'rejected' WHERE id = ?`;
        con.query(updateSql, [application_id], (err) => {
            if (err) {
                return res.json({ Status: false, Error: "Failed to reject application" });
            }

            const transporter = nodemailer.createTransport({
                service: "gmail",
                secure: true,
                port: 465,
                auth: {
                    user: process.env.Admin_mail,
                    pass: process.env.Admin_password, 
                },
            });
            const mailOptions = {
                from: process.env.Admin_mail,
                to: applicant.email,
                subject: "🚫 Club Application Rejected",
                html: `
                    <p>Hi ${applicant.name},</p>
                    <p>We appreciate your interest in the <strong>${applicant.club_code.toUpperCase()}</strong> club.</p>
                    <p>However, we regret to inform you that your application has not been accepted at this time.</p>
                    <p>Feel free to apply again in the future!</p>
                    <p>Best wishes,<br/>Club Management Team</p>
                `,
            };
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.error("Error sending rejection email:", err);
                    return res.json({ Status: false, Error: "Status updated, but email not sent" });
                }
                console.log("Rejection email sent:", info.response);
                return res.json({ Status: true, Message: "Application rejected & email sent" });
            });
        });
    });
});

//View member 
router.get("/getMembers", (req, res) => {
    const { club_code } = req.query;
    const sql = "SELECT id ,  name , email , phno , year , branch , interest FROM members WHERE club_code = ?";
    con.query(sql, [club_code], (err, result) => {
        if (err) return res.json({ Status: false, Error: "Error fetching members" });
        return res.json({ Status: true, Result: result });
    });
});


// Delete member
router.delete("/deletemember/:id", (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM members WHERE id = ?";
    
    con.query(sql, [id], (err, result) => {
        if (err) {
            console.error("Delete error:", err);
            return res.json({ Status: false, Error: "Error deleting member" });
        }
        return res.json({ Status: true });
    });
});


export { router as adminRouter };

