// Injecting all resume-related content into the #resume-content div
document.getElementById("resume-content").innerHTML = `
  <section>
    <h2>Summary</h2>
    <p>
      Aspiring software engineer and current graduate student in Software Engineering with hands-on experience through academic projects and a Graduate Research Assistantship focused on XR (Extended Reality) development. Comfortable working with Java, Python, JavaScript, and Unity for building interactive applications and immersive environments. Eager to learn and contribute to innovative technologies, with growing skills in backend systems, user experience design, and mobile/web development. Passionate about creating impactful solutions and excited to bring creativity, curiosity, and dedication to a collaborative engineering team.
    </p>
  </section>

  <section>
    <h2>Education</h2>
    <ul>
      <li><strong>Kennesaw State University, Marietta, GA</strong><br/>
        Master of Science, Software Engineering (2024–2026)<br/>
        Relevant Coursework: Algorithms, Software Development, Web Applications, Database Management</li>
      <li><strong>Kennesaw State University, Marietta, GA</strong><br/>
        Graduate Certificate, Software Engineering Foundations (2023–2024)<br/>
        GPA: 3.0<br/>
        Mastered Java, web development, and data structures.</li>
      <li><strong>American Intercontinental University, Atlanta, GA</strong><br/>
        Bachelor of Arts, Digital Communication and Media/Multimedia (Graduated May 2022)</li>
    </ul>
  </section>

  <section>
    <h2>Experience</h2>
    <h3>Graduate Research Assistant — Kennesaw State University, Marietta, GA (2024–Present)</h3>
    <ul>
      <li>Developed learning materials for undergraduate students covering XR technology introduction, development, and deployment through the SDLC.</li>
      <li>Researched and integrated XR technologies such as AR, VR, and MR to enhance immersive learning experiences.</li>
      <li>Created educational XR applications and simulations using Unity and 3D modeling tools.</li>
      <li>Supported research in extended reality and human-computer interaction.</li>
    </ul>

    <h3>Media Production Specialist — Elliotte Wideman Communications, Atlanta, GA (2022–Present)</h3>
    <ul>
      <li>Delivered multimedia solutions, including audio production and video editing.</li>
      <li>Managed projects for clients, ensuring high-quality deliverables.</li>
      <li>Developed branding strategies and marketing content.</li>
    </ul>

    <h3>Studio Manager / Audio Engineer — StreamCut Media, Atlanta, GA (2021–2022)</h3>
    <ul>
      <li>Oversaw studio operations and managed audio production projects.</li>
      <li>Engineered and mixed recordings for music and media productions.</li>
      <li>Maintained studio equipment and optimized workflow efficiency.</li>
    </ul>

    <h3>Audio Engineer Intern — The Omen Agency, Atlanta, GA (2017)</h3>
    <ul>
      <li>Supported audio recording sessions and Pro Tools editing.</li>
      <li>Assisted in live sound engineering for events and concerts.</li>
      <li>Managed studio setup and post-production tasks.</li>
    </ul>
  </section>

  <section>
    <h2>Projects</h2>

    <h3>Georgia Symphony Orchestra Unified Website (Proof-of-Concept) — 2025</h3>
    <p style="color: red;">
      Designed and developed a proof-of-concept unified website for the Georgia Symphony Orchestra (GSO), streamlining navigation, branding, and user engagement.
      Integrated accessibility features, centralized event listings, and multimedia content to enhance inclusivity and audience reach.
      Leveraged WordPress for content management and implemented filterable calendars and campaign-specific landing pages to simulate advanced web functionality.
      The project demonstrated real-world impact by addressing branding and operational challenges, creating a scalable solution to improve user experience,
      foster community connections, and attract diversified funding opportunities.
    </p>
    <ul>
      <li><strong>Course:</strong> SWE 7903 – Software Engineering Capstone (Fall 2024)</li>
      <li><strong>Prerequisites:</strong> SWE 6613 and SWE 6633 | <strong>Concurrent:</strong> SWE 6673</li>
    </ul>

    <h3>UBID Online Auction System — 2024</h3>
    <ul>
      <li>Developed UBID, an online auction system designed to transition traditional on-site auctions to an internet-based platform similar to eBay.</li>
      <li>Implemented core features such as user registration, item listing, bidding mechanisms, and reporting functionalities.</li>
      <li>Collaborated in a team environment to design system architecture, database schemas, and web interfaces.</li>
    </ul>

    <h3>HR Event Calendar System — 2024</h3>
    <ul>
      <li>Developed a secure intranet calendar system using Firebase and JavaScript.</li>
      <li>Enabled real-time updates and implemented user authentication and access control.</li>
    </ul>
  </section>

  <section>
    <h2>Technical Skills</h2>
    <ul>
      <li><strong>Programming:</strong> Python, C#, JavaScript, Unity scripting</li>
      <li><strong>Tools:</strong> Unity, Unreal Engine, Blender, AutoCAD, Pro Tools</li>
      <li><strong>XR Development:</strong> VR/AR application design, 3D modeling, scene optimization</li>
      <li><strong>Software:</strong> Firebase, Git, Adobe Creative Suite</li>
    </ul>
  </section>

  <section>
    <h2>Certifications</h2>
    <ul>
      <li>HTML, CSS, JavaScript for Web Developers (Johns Hopkins, 2023)</li>
      <li>HTML (W3Schools, 2023)</li>
      <li>Learn Java Basics (Programiz, 2023)</li>
      <li>Java (W3Schools, 2023)</li>
    </ul>
  </section>

  <section>
    <h2>References</h2>
    <p>Available upon request.</p>
  </section>
`;

// ========== Slideshow for Requirements Videos ==========

// Starts at first slide
let slideIndex = 0;

// Function to update which video is showing
function showSlide(n) {
  const slides = document.getElementsByClassName("mySlides");
  if (!slides.length) return;

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Loop around if out of bounds
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  // Show current slide
  slides[slideIndex].style.display = "block";
}

// Called when clicking the arrows
function plusSlides(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

// Initialize slideshow on page load
window.addEventListener("load", () => showSlide(slideIndex));
