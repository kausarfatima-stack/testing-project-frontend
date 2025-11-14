'use client';

import { useEffect, useState } from "react";

export default function Signup() {
    useEffect(() => {
    const GreetFromBackend = async () => {
        try {
            const response = await fetch('http://localhost:3001/api');
            if (response.ok) {
                const data = await response.text();
                console.log("Greet from backend: ", data);
                return data; 
            }
        } catch (error) {
            console.error('Error connecting to backend:', error);
        }
    };

    GreetFromBackend();
}, []);

    return (
        <div>
            <h1>Signup</h1>
            <div><label>
                Name: <input name="name" />
            </label></div>
            <div><label>
                Email: <input name="email" type="email" />
            </label></div>
            <div><label>
                Password: <input name="password" type="password" />
            </label></div>
            <div><label>
                ConfirmPassword: <input name="confirmPassword" type="password" />
            </label></div>
            <div><label>
                Role: <input name="role" />
            </label></div>
            <div>
                <h3>Already have an account </h3>
                <a href="#">Login</a>
            </div>
            <div>
                <button type="button">Signup</button>
            </div>
        </div>
    )
}