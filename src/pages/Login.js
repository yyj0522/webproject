import React, { useState } from "react";
import "./Login.css";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const users = {
        user: "123",
        test: "456"
    };

    const handleLogin = () => {
        if (users[username] && users[username] === password) {
            alert("로그인 성공!");
        } else {
            alert("아이디 또는 비밀번호가 잘못되었습니다.");
        }
    };

    return (
        <div className="login-page">
            <div className="form">
                <h1 style={{ marginBottom: "20px" }}>로그인</h1>
                <input
                    type="text"
                    placeholder="아이디"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>로그인</button>
            </div>
        </div>
    );
};

export default Login;
