import React, { useState, useEffect } from 'react';
import "./Achievement.css";

// --- FOLDER IMPORTS ---
const workFiles = import.meta.glob('../assets/NewsPage/WorkImmersionPub/*.{png,jpg,jpeg,JPG,mp4,mov}', { eager: true });
const workGallery = Object.values(workFiles).map((m) => m.default);

const bdayFiles = import.meta.glob('../assets/NewsPage/RenatoBday/*.{png,jpg,jpeg,JPG,mp4,mov}', { eager: true });
const bdayGallery = Object.values(bdayFiles).map((m) => m.default);

const memoScihighFiles = import.meta.glob('../assets/NewsPage/MemoSciHigh/*.{png,jpg,jpeg,JPG,PNG,JPEG,mp4,mov,jfif}', { eager: true });
const memoScihighGallery = Object.values(memoScihighFiles).map((m) => m.default);

const addendumScihighFiles = import.meta.glob('../assets/NewsPage/AddendumSciHigh/*.{png,jpg,jpeg,JPG,PNG,JPEG,mp4,mov,jfif}', { eager: true });
const addendumScihighGallery = Object.values(addendumScihighFiles).map((m) => m.default);

const dpdncr26Files = import.meta.glob('../assets/NewsPage/dpdncr1_26/*.{png,jpg,jpeg,JPG,PNG,JPEG,mp4,mov,jfif}', { eager: true });
const dpdncr26Gallery = Object.values(dpdncr26Files).map((m) => m.default);

const dpd30Files = import.meta.glob('../assets/NewsPage/DM30/*.{png,jpg,jpeg,JPG,PNG,JPEG,mp4,mov,jfif}', { eager: true });
const dpd30Gallery = Object.values(dpd30Files).map((m) => m.default);

const feb3dgtechFiles = import.meta.glob('../assets/NewsPage/feb3dgtech/*.{png,jpg,jpeg,JPG,PNG,JPEG,mp4,mov,jfif}', { eager: true });
const feb3dgtechGallery = Object.values(feb3dgtechFiles).map((m) => m.default);

const stemFiles = import.meta.glob('../assets/NewsPage/Stemazing/*.{png,jpg,jpeg,JPG,mp4,mov}', { eager: true });
const stemGallery = Object.values(stemFiles).map((m) => m.default);

const feb4roboFiles = import.meta.glob('../assets/NewsPage/feb4robo/*.{png,jpg,jpeg,JPG,PNG,JPEG,mp4,mov,jfif}', { eager: true });
const feb4roboGallery = Object.values(feb4roboFiles).map((m) => m.default);

const feb4ictFiles = import.meta.glob('../assets/NewsPage/feb4ictdgtech/*.{png,jpg,jpeg,JPG,PNG,JPEG,mp4,mov,jfif}', { eager: true });
const feb4ictGallery = Object.values(feb4ictFiles).map((m) => m.default);

const dlsufeb5Files = import.meta.glob('../assets/NewsPage/dlsufeb5/*.{png,jpg,jpeg,JPG,PNG,JPEG,mp4,mov,jfif}', { eager: true });
const dlsufeb5Gallery = Object.values(dlsufeb5Files).map((m) => m.default);

const feb6digitechFiles = import.meta.glob('../assets/NewsPage/Feb6Digitech/*.{png,jpg,jpeg,JPG,PNG,JPEG,mp4,mov,jfif}', { eager: true });
const feb6digitechGallery = Object.values(feb6digitechFiles).map((m) => m.default);

// --- SINGLE PICTURE/VIDEO FILE IMPORT ---
import SingleJan5 from "../assets/NewsPage/Jan5lontok.jpg";
import jhsguide from "../assets/NewsPage/Grade7Guidelines.jpg";
import jhsapp from "../assets/NewsPage/jhsapplicationform.jpg";
import Jan6 from "../assets/NewsPage/Jan6video.mp4";

const NewsItem = ({ item }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
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
                        if (line.startsWith("•") || line.startsWith("")) {
                            return (
                                <ul key={i} className="news-list-wrapper">
                                    <li className="news-bullet">{line.substring(1)}</li>
                                </ul>
                            );
                        }

                        // URL Detection Logic
                        const urlRegex = /(https?:\/\/[^\s]+)/g;
                        const parts = line.split(urlRegex);

                        return (
                            <p key={i} className="news-paragraph">
                                {parts.map((part, index) => 
                                    urlRegex.test(part) ? (
                                        <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="inline-link">
                                            {part}
                                        </a>
                                    ) : (
                                        part
                                    )
                                )}
                            </p>
                        );
                    })}
                </div>

                {item.sourceName && (
                    <div className='news-source'>
                        <span>Source: </span>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                            {item.sourceName}
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default function Achievements() {
    const allNews = [
        {
            id: 1,
            date: "FEBRUARY 06, 2026",
            headline: "GRADE 7 RESEARCH CLASS EXPLORES LEARNING THROUGH TAGUIG DIGITECH TABLETS ",
            media: feb6digitechGallery, 
            content: [
                "The Grade 7 Research class, guided by Mrs. Leriza Calibara, uses Taguig DigiTech tablets to enhance research, learning, and digital literacy. These tools help students gather data, organize information, and create digital presentations, making lessons more interactive, engaging, and technology-driven. The program empowers learners to develop research skills, creativity, and innovation through modern technology."
            ],
            sourceName: "SRCCMSTHS Offical Facebook Page",
            link: "https://www.facebook.com/share/p/14Uve5D7of3/"
        },
        {
            id: 2,
            date: "FEBRUARY 05, 2026",
            headline: "Celebrating Excellence in Innovation and Research",
            media: dlsufeb5Gallery, 
            content: [
                "The SRCCMSTHS research team composed of Brix Jade Garnica, James Nathanael Isagon, and Bong Jr. Zaraspe earned 1st Runner-Up for Best Project (Advanced Level) and 2nd Runner-Up for the Lourdes Best Robotics Award at the BRAINiac Year 4: Clash of the Sci-Tech Champs – Robotics Challenge Finals held on January 31, 2026. Guided by their coach and supported by school leaders, teachers, and parents, this achievement highlights the students’ innovation, teamwork, perseverance, and excellence in science and technology."
            ],
            sourceName: "SRCCMSTHS Offical Facebook Page",
            link: "https://www.facebook.com/share/p/1ZE5ZSwUjc/"
        },
        {
            id: 3,
            date: "FEBRUARY 04, 2026",
            headline: "G12 ICT STUDENTS MASTER DIGITAL IMAGING WITH ACER LAPTOPS",
            media: feb4ictGallery, 
            content: [
                "Grade 12 ICT Heron learners are enhancing their digital imaging and editing skills through hands-on activities using Acer laptops provided under Taguig City’s DigiTech Flagship Program. This initiative integrates modern technology into the classroom, enabling students to develop technical expertise, creativity, and confidence while preparing them for future careers in ICT, design, and multimedia."
            ],
            sourceName: "SRCCMSTHS Offical Facebook Page",
            link: "https://www.facebook.com/share/p/179fkX2Hud/"
        },
        {
            id: 4,
            date: "FEBRUARY 04, 2026",
            headline: "CAYETANO SCIENCE ROBOTICS TEAM EARNS MULTIPLE MEDALS AT ROBOSPORTS 2026",
            media: feb4roboGallery, 
            content: [
                "The SRCCMSTHS Robotics Club secured 4th Place Overall at the DLSMHSI Robosports Tournament 2026 held in Dasmariñas, Cavite, showcasing excellence in robotics, teamwork, and innovation. Competing against strong schools, the team earned multiple gold, silver, and bronze medals across various events, reflecting their technical skill, preparation, and resilience. Guided by dedicated coaches and supported by school leaders and the community, this achievement highlights the club’s commitment to continuous learning, innovation, and excellence."
            ],
            sourceName: "SRCCMSTHS Offical Facebook Page",
            link: "https://www.facebook.com/share/p/1CGSZtzusx/"
        },
        {
            id: 5,
            date: "FEBRUARY 03, 2026",
            headline: "EMPOWERING TAGUIG LEARNERS THROUGH SMART LEARNING",
            media: feb3dgtechGallery,
            content: [
                "SRCCMSTHS empowers Taguig learners through smart learning by utilizing tablets and Smart Interactive Screens provided under the Taguig DigiTech initiative led by Mayor Laarni “Ate Lani” Cayetano. These advanced tools enhance classroom engagement, creativity, and collaboration, promoting deeper learning and academic excellence. The program was showcased during division demonstrations, highlighting the effective integration of technology in teaching and learning. This initiative reflects the school’s commitment to innovation and future-ready education."
            ],
            sourceName: "SRCCMSTHS Offical Facebook Page",
            link: "https://www.facebook.com/share/p/1CgBUm51Dg/"
        },
            {
            id: 6,
            date: "JANUARY 30, 2026",
            headline: "Dvision Memorandum",
            media: dpd30Gallery,
            content: [
                "Taguig Science High School and Sen. Renato \"Compañero\" Cayetano Memorial Science and Technology High School Admission Guidelines for incoming Grade 11 Applicants SY 2026-2027",
                "Downloadable Application form:",
                "https://bit.ly/3MgJ5KJ"
            ],
            sourceName: "SRCCMSTHS Offical Facebook Page",
            link: "https://www.facebook.com/share/p/1CgBUm51Dg/"
        },
        {
            id: 7,
            date: "JANUARY 28, 2026",
            headline: "STEMAZING HIGHLIGHTS",
            media: stemGallery, 
            content: [
                "On January 28, 2026, at Taguig Integrated School, students from SRCCMSTHS won First Runner-Up in the Division Festival of Talent – STEMAZING, showcasing excellence in STEM, creativity, teamwork, and perseverance. Guided by their mentor and supported by school leaders and faculty, their achievement reflects dedication, preparation, and the school’s strong commitment to nurturing student potential."
            ],
            sourceName: "SRCCMSTHS Offical Facebook Page",
            link: "https://www.facebook.com/share/p/1Bx5TXT7wP/"
        },
        {
            id: 8,
            date: "JANUARY 26, 2026",
            headline: "Unified Science High School Admissions in NCR: Your Questions Answered!",
            media: dpdncr26Gallery,
            content: [
                "The Unified Admissions Process for Science High Schools in NCR requires applicants to take a single computer-based test (USHAT) and select up to five preferred schools. Test results are ranked per chosen school, and qualified applicants may undergo interviews depending on ranking and slot availability.",
                "The exam covers Grade 6 competencies in Science, Mathematics, English, Filipino, and Abstract Reasoning.",
                "Important Dates:",
                " Application Period: January 12 – February 20, 2026",
                " Exam Date: March 7, 2026",
                " Interview Period: March 16 – 20, 2026",
                " Release of Results: April 10, 2026",
                "Applicants must confirm and enroll within five (5) working days after the release of resu lts to secure their slot.",
                "For complete guidelines and official memoranda, visit:",
                "🔗 Regional Memorandum No. 45 & 51, s. 2026 – https://tinyurl.com/ymezk2ap"
            ],
            sourceName: "SRCCMSTHS Offical Facebook Page",
            link: "https://www.facebook.com/share/p/1Bq2nyxkYw/"
        },
        {
            id: 9,
            date: "JANUARY 24, 2026",
            headline: "Addendum to the Regional Unified Admission Guidelines for Legislated and Regional Science High Schools for SY 2026-2027 Onwards",
            media: addendumScihighGallery,
            sourceName: "SRCCMSTHS Offical Facebook Page",
            link: "https://www.facebook.com/share/p/1CWXMJx2eL/"
        },
        {
            id: 10,
            date: "JANUARY 22, 2026",
            headline: "Regional Unified Admission Guidelines for Legislated and Regional Science High Schools for SY 2026-2027 Onwards - RM No. 045 s. 2026",
            media: memoScihighGallery,
            sourceName: "SRCCMSTHS Offical Facebook Page",
            link: "https://www.facebook.com/share/p/1CyFZ2obz5/"
        },
        {
            id: 11,
            date: "JANUARY 20, 2026",
            headline: "ATTENTION: INCOMING GRADE 7 APPLICANTS!",
            media: [jhsapp],
            content: [
                "Your journey to excellence starts here!",
                "You may now download the Application Form for Sen. Renato “Compañero” Cayetano Memorial Science and Technology High School Admission Test by scanning the QR code",
                "What to do next:",
                " Scan the QR code and download the form",
                " Prepare your required documents",
                " Official details on eligibility, submission, and examination schedules will be announced soon.",
                "Don’t miss this opportunity to be part of a school where science, technology, and excellence thrive!"
            ], 
            sourceName: "SRCCMSTHS Offical Facebook Page",
            link: "https://www.facebook.com/share/p/1ARejxkHwU/"
        },
        {
            id: 12,
            date: "JANUARY 19, 2026",
            headline: "GUIDELINES FOR THE ADMISSION OF INCOMING GRADE 7 LEARNERS SENATOR RENATO “COMPAÑERO” CAYETANO MEMORIAL SCIENCE & TECHNOLOGY HIGH SCHOOL S.Y. 2026–2027",
            media: [jhsguide],
            content: [
                "SRCCMSTHS will implement the Unified Regional Guidelines for the admission of incoming Grade 7 learners for SY 2026–2027, as issued by DepEd NCR. Further details on qualifications, requirements, and the admission test schedule will be announced soon. Interested applicants are encouraged to prepare the necessary documents and stay tuned for updates. Incoming Grade 11 applicants are advised to wait for further announcements."
            ], 
            sourceName: "SRCCMSTHS Offical Facebook Page",
            link: "https://www.facebook.com/share/p/1DH8jp2kBF/"
        },
        {
            id: 13,
            date: "JANUARY 06, 2026",
            headline: "SRCCMSTHS MATHLETES ELEVATING ACADEMIC EXCELLENCE BEYOND BORDERS",
            media: [Jan6], 
            content: [
                "SRCCMSTHS Mathletes achieved outstanding success in multiple local, national, and international competitions from November to December, demonstrating academic excellence, discipline, and perseverance. Their achievements include top rankings in the Brainiac Quiz Bowl, major awards in the Regional Science and Technology Fair, Silver Medals at the FISO National Round, and multiple prizes in international mathematics competitions, including the BIG BAY BEI and Southeast Asian IQ Challenge. These accomplishments reflect the learners’ dedication, the coaches’ mentorship, and the strong culture of excellence upheld by the school."
            ],
            sourceName: "SRCCMSTHS Offical Facebook Page",
            link: "https://www.facebook.com/share/v/1BEBm3LLta/"
        },
        {
            id: 14,
            date: "JANUARY 05, 2026",
            headline: "Kalel Lontok’s Math Brilliance Triumphs at International WIMO Finals",
            media: [SingleJan5],
            content: [
                "Kalel Elijah A. Lontok won a Silver Award at the World International Mathematical Olympiad (WIMO) Final Round 2025."
            ],
            sourceName: "SRCCMSTHS Offical Facebook Page",
            link: "https://www.facebook.com/share/p/1BrVLHD6Ga/"
        },
        {
            id: 15,
            date: "JANUARY 05, 2026",
            headline: "FIRST BATCH OF WORK IMMERSION 2025-2026 ALTIORA",
            media: workGallery,
            content: [
                "Matagumpay na natapos ang First Batch of Work Immersion 2025–2026 ng Altiora na may temang “TANGLAW,” na layong pag-ugnayin ang edukasyon at industriya. Lumahok ang 162 mag-aaral mula sa ABM, STEM, at ICT strands sa iba’t ibang partner institutions upang magkaroon ng aktwal na karanasan sa trabaho. Sa tulong ng mga katuwang na organisasyon, administrador, guro, at tagapamahala ng programa, nahubog ang kaalaman, kasanayan, at pagpapahalaga ng mga mag-aaral. Ang programang ito ay nagpatibay sa layuning hubugin ang mga future-ready learners at lider ng lipunan.”"
            ],
            sourceName: "SRCCMSTHS Offical Facebook Page",
            link: "https://www.facebook.com/share/p/1HEKVzkHJr/"
        },
        {
            id: 16,
            date: "DECEMBER 22, 2025",
            headline: "Buhay na Pamana",
            media: bdayGallery,
            content: [
                "Noong Disyembre 12, 2025, ginunita ng SRCCMSTHS ang kaarawan ni yumaong Sen. Renato “Compañero” Cayetano bilang pasasalamat sa kanyang ambag sa edukasyon at serbisyo. Sa tulong ng Pamahalaang Lungsod ng Taguig sa pamumuno ni Mayor Laarni Cayetano, naging makahulugan ang selebrasyon. Ipinakita nito na ang pamana ni Sen. Cayetano ay patuloy na nabubuhay sa bawat mag-aaral, guro, at pagpapahalagang humuhubog sa kinabukasan."
            ],
            sourceName: "SRCCMSTHS Offical Facebook Page",
            link: "https://www.facebook.com/share/v/1GbDsZWu2g/"
        }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentNews = allNews.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(allNews.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="news-container">
            <div className="news-header-section">
                <h1 className='news-title'>NEWS & UPDATES</h1>
                <span className='news-underline'></span>
            </div>

            {currentNews.map(item => <NewsItem key={item.id} item={item} />)}

            {totalPages > 1 && (
                <div className="pagination-wrapper">
                    <button 
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                        className="page-nav-btn"
                    >
                        Prev
                    </button>
                    
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => handlePageChange(i + 1)}
                            className={`page-number ${currentPage === i + 1 ? 'active' : ''}`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button 
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                        className="page-nav-btn"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}