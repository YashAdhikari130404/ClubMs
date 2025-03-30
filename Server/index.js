
import express from "express";
import cors from "cors";
import { adminRouter } from "./Routes/AdminRoute.js";
import { UserRouter } from "./Routes/UserRoute.js";
import { SignUpRouter } from "./Routes/UserSignUpRoute.js"; // Import SignupRouter

const app = express();
app.use(cors());
app.use(express.json());

// Define routes
app.use("/auth", adminRouter);
app.use("/user", UserRouter);
app.use("/signup", SignUpRouter); // Add this to handle signup routes

// Start the server
app.listen(3000, () => {
    console.log("Server is running");
});
