import React, { useState } from "react";

import clouds from "../img/clouds.svg";
import cloudsCheck from "../img/cloudsCheck.svg";
import snowman from "../img/snowman.svg";
import snowmanCheck from "../img/snowmanCheck.svg";
import sun from "../img/sun.svg";
import sunCheck from "../img/sunCheck.svg";
import umbrella from "../img/umbrella.svg";
import umbrellaCheck from "../img/umbrellaCheck.svg";

const Page1 = () => {
    // 상태 관리
    const [selectedWeather, setSelectedWeather] = useState("");

    const handleWeatherClick = (weather) => {
        setSelectedWeather(weather);
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>

            <h3>오늘의 날짜를 적고, 날씨에 동그라미 하세요</h3>
            <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "20px" }}>
                <input type="text"  style={{ width: "60px" }} />년
                <input type="text"  style={{ width: "40px" }} />월
                <input type="text"  style={{ width: "40px" }} />일
                <input type="text"  style={{ width: "40px" }} />요일

                <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;날씨</>
                <img
                    src={selectedWeather === "sun" ? sunCheck : sun}
                    alt="해"
                    onClick={() => handleWeatherClick("sun")}
                    style={{ width: "30px", cursor: "pointer" }}
                />
                <img
                    src={selectedWeather === "clouds" ? cloudsCheck : clouds}
                    alt="구름"
                    onClick={() => handleWeatherClick("clouds")}
                    style={{ width: "30px", cursor: "pointer" }}
                />
                <img
                    src={selectedWeather === "umbrella" ? umbrellaCheck : umbrella}
                    alt="우산"
                    onClick={() => handleWeatherClick("umbrella")}
                    style={{ width: "30px",  cursor: "pointer" }}
                />
                <img
                    src={selectedWeather === "snowman" ? snowmanCheck : snowman}
                    alt="눈사람"
                    onClick={() => handleWeatherClick("snowman")}
                    style={{ width: "30px", cursor: "pointer" }}
                />

            </div>
            
            <h3>층별 시설 기억하기</h3>
            <p>다음은 노인복지관의 층별 안내도입니다.</p>
            <p>각 <b>층별 시설</b>과 설명을 소리 내어 읽어보세요.</p>
            <table border="1" style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
                <thead>
                    <tr>
                        <th style={{ padding: "10px" }}>층</th>
                        <th style={{ padding: "10px" }}>시설</th>
                        <th style={{ padding: "10px" }}>설명</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: "10px", textAlign: "center" }}>5층</td>
                        <td style={{ padding: "10px", textAlign: "center" }}>음악실</td>
                        <td style={{ padding: "10px" }}>악기연주, 노래교실, 공연활동 등 노후의 건전한 여가문화를 위한 음악프로그램이 진행됩니다.</td>
                    </tr>
                    <tr>
                        <td style={{ padding: "10px", textAlign: "center" }}>4층</td>
                        <td style={{ padding: "10px", textAlign: "center" }}>미술실</td>
                        <td style={{ padding: "10px" }}>그림 그리기, 서예, 공예 등 노후의 건전한 여가문화를 위한 미술프로그램이 진행됩니다.</td>
                    </tr>
                    <tr>
                        <td style={{ padding: "10px", textAlign: "center" }}>3층</td>
                        <td style={{ padding: "10px", textAlign: "center" }}>체육실</td>
                        <td style={{ padding: "10px" }}>탁구, 요가, 게이트볼, 스포츠댄스 등 노후의 건강한 신체유지를 위한 체육프로그램이 진행됩니다.</td>
                    </tr>
                    <tr>
                        <td style={{ padding: "10px", textAlign: "center" }}>2층</td>
                        <td style={{ padding: "10px", textAlign: "center" }}>요리실</td>
                        <td style={{ padding: "10px" }}>요리, 제과제빵, 바리스타(커피제조) 등 일상생활 참여 증진을 위한 요리프로그램이 진행됩니다.</td>
                    </tr>
                    <tr>
                        <td style={{ padding: "10px", textAlign: "center" }}>1층</td>
                        <td style={{ padding: "10px", textAlign: "center" }}>진료실<br/> & <br/>물리치료실</td>
                        <td style={{ padding: "10px" }}>건강상담, 응급처치, 물리치료 처방 등 의사의 진료를 받을 수 있습니다. <br/> 또한 운동치료, 전기자극치료 등 물리치료서비스를 이용할 수 있습니다.</td>
                    </tr>
                </tbody>
            </table>
            <p><u><b>복지관의 층별 시설</b>을 기억해 주세요.</u></p>

            {/* 다음 페이지 버튼 */}
            <div style={{ textAlign: "right" }}>
                <button style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                    다음 페이지
                </button>
            </div>
        </div>
    );
};

export default Page1;