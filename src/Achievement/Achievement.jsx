import React, { useState, useEffect } from 'react';
import "./Achievement.css";

// Safely grab images/videos. If folder doesn't exist, it returns an empty object.
const workFiles = import.meta.glob('../assets/NewsPage/WorkImmersionPub/*.{png,jpg,jpeg,JPG,mp4,mov}', { eager: true });
const workGallery = Object.values(workFiles).map((m) => m.default);

const stemFiles = import.meta.glob('../assets/NewsPage/Stemazing/*.{png,jpg,jpeg,JPG,mp4,mov}', { eager: true });
const stemGallery = Object.values(stemFiles).map((m) => m.default);

const bdayFiles = import.meta.glob('../assets//NewsPage/RenatoBday/*.{png,jpg,jpeg,JPG,mp4,mov}', { eager: true });
const bdayGallery = Object.values(bdayFiles).map((m) => m.default);

const NewsItem = ({ item }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // Safety check: if media is undefined or empty, return null or a message
    const mediaList = item.media || [];
    const hasMedia = mediaList.length > 0;
    const hasMultipleItems = mediaList.length > 1;

    const nextSlide = (e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev === mediaList.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = (e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? mediaList.length - 1 : prev - 1));
    };

    useEffect(() => {
        if (!hasMultipleItems) return;
        const currentFile = mediaList[currentIndex];
        const isVideo = typeof currentFile === 'string' && (currentFile.endsWith('.mp4') || currentFile.endsWith('.mov'));

        if (!isVideo) {
            const interval = setInterval(() => nextSlide(), 5000);
            return () => clearInterval(interval);
        }
    }, [currentIndex, hasMultipleItems, mediaList]);

    if (!hasMedia) return <div className="news-card">No media found for this post.</div>;

    const currentFile = mediaList[currentIndex];
    const isVideo = typeof currentFile === 'string' && (currentFile.endsWith('.mp4') || currentFile.endsWith('.mov'));

    return (
        <div className='news-card'>
            <div className='news-image-container'>
                <div className="slider">
                    {hasMultipleItems && (
                        <>
                            <button className="slider-arrow left" onClick={prevSlide}>&#10094;</button>
                            <button className="slider-arrow right" onClick={nextSlide}>&#10095;</button>
                        </>
                    )}

                    {isVideo ? (
                        <video src={currentFile} className="news-poster" controls muted />
                    ) : (
                        <img src={currentFile} alt="News" className="news-poster slider-fade" />
                    )}
                </div>

                {hasMultipleItems && (
                    <div className="slider-dots">
                        {mediaList.map((_, idx) => (
                            <div 
                                key={idx} 
                                className={`dot ${currentIndex === idx ? 'active-dot' : ''}`}
                                onClick={() => setCurrentIndex(idx)}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className='news-content-container'>
                <p className='news-date'>{item.date}</p>
                <h2 className='news-headline'>{item.headline}</h2>
                <div className='news-body'>
                    {item.content && item.content.map((line, i) => {
                        if (line.startsWith("•")) {
                            return (
                                <ul key={i} className="news-list-wrapper">
                                    <li className="news-bullet">{line.substring(1)}</li>
                                </ul>
                            );
                        }
                        return <p key={i} className="news-paragraph">{line}</p>;
                    })}
                </div>
            </div>
        </div>
    );
};

export default function Achievements() {
    const allNews = [
        {
            id: 1,
            date: "JANUARY 05, 2026",
            headline: "FIRST BATCH OF WORK IMMERSION 2025-2026 ALTIORA: BRIDGING EDUCATION AND INDUSTRY",
            media: workGallery, // This will grab the video from that folder
            content: [
                "The First Batch of Work Immersion 2025-2026 Altiora has successfully concluded, marking another milestone in our commitment to “Bridging Education and Industry: Empowering Future-Ready Learners through Work Immersion.” Under the theme “TANGLAW: Transforming Aspirations, Nurturing Growth, Leading Achievements, and Widening Horizons through Community Partnership in Work Immersion,” our students have embarked on a transformative journey, turning classroom learning into real-world experience.",
                "A total of 162 students from ABM, STEM, and ICT strands were deployed across various esteemed organizations, gaining hands-on exposure that cultivated their skills, confidence, and professional mindset. This endeavor would not have been possible without the unwavering support and collaboration of our generous partners, to whom we extend our deepest gratitude:",
                "•Army General Hospital",
                "•Bonifacio Art Foundation, Inc. (The Mind Museum)",
                "•C.B. Andrew Group of Companies",
                "•Recuenco General Hospital",
                "•Simbayanan ni Maria Multi-Purpose Cooperative",
                "•Taguig LGU – IT Department",
                "•Technological University of the Philippines – Taguig",
                "Your dedication to nurturing young minds and sharing industry expertise has empowered our students to dream bigger, work harder, and embrace the challenges of tomorrow with resilience.",
                "We extend heartfelt gratitude to the power duo and guiding fathers of SRCCMSTHS, Assistant Principal II, Mr. Rian A. Loriega, and OIC Principal, Dr. Arturo A. Tolentino, whose vision, and support made this program possible. Special thanks also to SHS Work Immersion Coordinator, Mr. Judd Lawrence D. Guy-Joco, and our dedicated Grade 12 faculty, whose guidance and commitment turned this immersion into a truly transformative experience for our learners. Through their mentorship, our learners not only developed technical skills but also cultivated values of responsibility, teamwork, and adaptability, qualities essential for future success.", 
                "The First Batch of Work Immersion 2025-2026 has truly exemplified the power of partnership, education, and community, illuminating the path for future cohorts. As we celebrate this achievement, we look forward to continuing our mission of transforming aspirations, nurturing growth, leading achievements, and widening horizons for every Altiora learner.",
                "Together, we are shaping not just students, but future-ready leaders prepared to make meaningful contributions to society"
            ]
        },
        {
            id: 2,
            date: "JANUARY 28, 2026",
            headline: "STEMAZING HIGHLIGHTS",
            media: stemGallery, 
            content: [
                "Division Festival of Talent – STEMAZING, First Runner-Up.",
                "•Mark Trowa Dorado (Grade 11)",
                "•Eugene Martin Sinampaga (Grade 10)",
                "•Ysven Rylai Apostol (Grade 9)"
            ]
        },
        {
            id: 3,
            date: "DECEMBER 22, 2025",
            headline: "Buhay na Pamana",
            media: bdayGallery, // This will grab the video from that folder
            content: [
                "Noong Disyembre 12, 2025, nagsama-sama ang SRCCMSTHS upang gunitain ang kaarawan ng yumaong Sen. Renato “Compañero” Cayetano—isang araw ng pasasalamat sa kanyang malasakit sa bayan, lalo na sa edukasyon at tapat na paglilingkod.",
                "Naging mas makahulugan ang paggunita sa tulong ng Pamahalaang Lungsod ng Taguig sa pamumuno ni Mayor Laarni “Ate Lani” Cayetano. Sa simpleng handog at sama-samang selebrasyon, naipakita na ang tunay na serbisyo ay may puso at pagkakaisa.",
                "Ang pamana ni Sen. Cayetano ay patuloy na nabubuhay sa paaralan—sa bawat mag-aaral na nangangarap, guro na gumagabay, at halagang patuloy na isinasabuhay. Hindi lamang namin inalala ang isang pangalan, kundi ipinagdiwang ang isang pamana na humuhubog sa aming isipan, puso, at kinabukasan."
            ]
            }
    ];

    return (
        <div className="news-container">
            <div className="news-header-section">
                <h1 className='news-title'>NEWS & UPDATES</h1>
                <span className='news-underline'></span>
            </div>
            {allNews.map(item => <NewsItem key={item.id} item={item} />)}
        </div>
    );
}