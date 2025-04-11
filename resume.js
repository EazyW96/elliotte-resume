// Injects the main resume sections (not including project videos) into the page
document.getElementById("resume-content").innerHTML = `
  <section>
    <h2>Summary</h2>
    <p>
      Aspiring software engineer and current graduate student in Software Engineering...
    </p>
  </section>

  <section>
    <h2>Education</h2>
    <ul>
      <li><strong>Kennesaw State University</strong> - MS in Software Engineering (2024–2026)</li>
      <li><strong>AIU Atlanta</strong> - BA Digital Communication and Media (2022)</li>
    </ul>
  </section>

  <section>
    <h2>Experience</h2>
    <h3>Graduate Research Assistant – KSU</h3>
    <ul>
      <li>Created XR tutorials and instructional material for undergraduates.</li>
    </ul>
    <h3>Media Production Specialist – EWC</h3>
    <ul>
      <li>Produced and edited multimedia for clients and internal use.</li>
    </ul>
  </section>

  <section>
    <h2>Projects</h2>
    <h3>GSO Unified Website</h3>
    <ul>
      <li>Developed in WordPress with calendar filters and accessibility support.</li>
    </ul>
    <h3>HR Event Calendar System</h3>
    <ul>
      <li>Real-time Firebase calendar with auth.</li>
    </ul>
  </section>

  <section>
    <h2>Technical Skills</h2>
    <ul>
      <li><strong>Languages:</strong> Python, C#, JavaScript</li>
      <li><strong>Tools:</strong> Unity, Blender, Firebase</li>
    </ul>
  </section>

  <section>
    <h2>Certifications</h2>
    <ul>
      <li>HTML, CSS, JavaScript (Johns Hopkins, W3Schools, Programiz)</li>
    </ul>
  </section>
`;
