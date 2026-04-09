

function Footer() {
  return (
    <footer className="footer">
        <p> <strong>&#128062;&#128062;Help a Doggy Out (HADO!)&#128062;&#128062;</strong></p>
      <p>Built by Dr. Tasha J © {new Date().getFullYear()}</p>
      <div className="footer-links">
        <a href="https://github.com/tashaljordan-dev/Final-Project_Unit-1.git" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <span> • </span>
        <a href="https://www.linkedin.com/in/drtashajordan/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
         <span> • </span>
         <a href ="https://www.facebook.com/share/g/1CGxRtjgZ1/" target="_blank" rel="noopener noreferrer">
          Facebook Diabetic Dog Chat
        </a>
      </div>
    </footer>
  );
}

export default Footer;