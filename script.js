* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #0a0e27;
    color: #e0e0e0;
    line-height: 1.6;
}

/* Navbar */
.navbar {
    background-color: #0f1437;
    border-bottom: 1px solid #1a1f3a;
    position: sticky;
    top: 0;
    z-index: 100;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-brand {
    font-size: 1.5rem;
    font-weight: 700;
    color: #00d4ff;
    letter-spacing: 0.5px;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    color: #a0a0b0;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
}

.nav-links a:hover,
.nav-links a.active {
    color: #00d4ff;
}

.nav-links a.active::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #00d4ff;
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%);
    padding: 8rem 2rem;
    text-align: center;
    border-bottom: 1px solid #1a1f3a;
}

.hero-content h1 {
    font-size: 4rem;
    color: #00d4ff;
    margin-bottom: 1rem;
    font-weight: 800;
    letter-spacing: 1px;
}

.tagline {
    font-size: 1.5rem;
    color: #b0b0c0;
    margin-bottom: 0.5rem;
}

.subtitle {
    font-size: 1.1rem;
    color: #808090;
    margin-bottom: 2rem;
}

.cta-button {
    display: inline-block;
    background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%);
    color: #0a0e27;
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    font-weight: 700;
    text-decoration: none;
    border-radius: 5px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
}

.cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 212, 255, 0.5);
}

/* Info Section */
.info {
    padding: 4rem 2rem;
    background-color: #0a0e27;
}

.info-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.info-card {
    background: linear-gradient(135deg, #1a1f3a 0%, #15192d 100%);
    padding: 2rem;
    border-radius: 8px;
    border: 1px solid #2a2f4a;
    transition: transform 0.3s ease, border-color 0.3s ease;
}

.info-card:hover {
    transform: translateY(-5px);
    border-color: #00d4ff;
}

.info-card h3 {
    color: #00d4ff;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
}

.info-card p {
    color: #a0a0b0;
}

/* Content Section */
.content-section {
    padding: 4rem 2rem;
    min-height: calc(100vh - 200px);
}

.content-container {
    max-width: 900px;
    margin: 0 auto;
}

.content-container h1 {
    color: #00d4ff;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    letter-spacing: 0.5px;
}

.content-container h2 {
    color: #00d4ff;
    font-size: 1.8rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
}

.content-container h3 {
    color: #b0b0ff;
    font-size: 1.3rem;
    margin-top: 1.5rem;
    margin-bottom: 0.8rem;
}

.content-container p {
    color: #a0a0b0;
    margin-bottom: 1rem;
}

.content-container ul {
    color: #a0a0b0;
    margin-left: 2rem;
    margin-bottom: 1.5rem;
}

.content-container li {
    margin-bottom: 0.5rem;
}

.content-container a {
    color: #00d4ff;
    text-decoration: none;
    transition: opacity 0.3s ease;
}

.content-container a:hover {
    opacity: 0.8;
    text-decoration: underline;
}

/* Features List */
.features-list {
    list-style-type: none;
    margin-left: 0;
}

.features-list li {
    padding-left: 2rem;
    position: relative;
    margin-bottom: 1rem;
}

.features-list li:before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #00d4ff;
    font-weight: bold;
}

/* Download Card */
.download-card {
    background: linear-gradient(135deg, #1a1f3a 0%, #15192d 100%);
    border: 1px solid #2a2f4a;
    border-radius: 8px;
    padding: 3rem;
    margin: 2rem 0;
    text-align: center;
}

.download-card h2 {
    color: #00d4ff;
    margin-top: 0;
}

.version {
    color: #b0b0ff;
    font-size: 1.2rem;
    margin: 0.5rem 0;
}

.release-date {
    color: #808090;
    font-size: 0.9rem;
    margin-bottom: 2rem;
}

.system-requirements {
    text-align: left;
    background-color: #0f1437;
    padding: 1.5rem;
    border-radius: 5px;
    margin: 2rem 0;
}

.system-requirements h3 {
    margin-top: 0;
}

.system-requirements ul {
    margin-left: 1.5rem;
}

.download-button {
    background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%);
    color: #0a0e27;
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
}

.download-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 212, 255, 0.5);
}

/* Info Box */
.info-box {
    background: linear-gradient(135deg, #1a1f3a 0%, #15192d 100%);
    border-left: 3px solid #00d4ff;
    padding: 1.5rem;
    margin: 2rem 0;
    border-radius: 5px;
}

.info-box h3 {
    margin-top: 0;
}

/* License Text */
.license-text {
    background: linear-gradient(135deg, #1a1f3a 0%, #15192d 100%);
    padding: 2rem;
    border-radius: 8px;
    border: 1px solid #2a2f4a;
}

.license-text h2 {
    margin-top: 0;
}

.license-text ul {
    margin-bottom: 1.5rem;
}

/* Footer */
.footer {
    background-color: #0f1437;
    border-top: 1px solid #1a1f3a;
    padding: 2rem;
    text-align: center;
    color: #808090;
    margin-top: 4rem;
}

.footer p {
    margin: 0.5rem 0;
}

.social-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 1rem;
}

.social-links a {
    color: #00d4ff;
    text-decoration: none;
    transition: opacity 0.3s ease;
}

.social-links a:hover {
    opacity: 0.8;
}

/* Responsive */
@media (max-width: 768px) {
    .nav-links {
        gap: 1rem;
        font-size: 0.9rem;
    }

    .hero-content h1 {
        font-size: 2.5rem;
    }

    .tagline {
        font-size: 1.2rem;
    }

    .content-container h1 {
        font-size: 2rem;
    }

    .download-card {
        padding: 1.5rem;
    }

    .info-container {
        grid-template-columns: 1fr;
    }
}
