import { Mail, Twitter, Linkedin, Instagram } from "lucide-react";
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Women In Power</h3>
          <p>
            Strengthening leadership capacity through ideas,
            community, and action.
          </p>
        </div>

        <div>
          <h4>Organization</h4>
          <a href="/about">About</a>
          <a href="/programs">Programs</a>
          <a href="/impact">Impact</a>
        </div>

        <div>
          <h4>Contact</h4>
          <p><Mail size={14} /> hello@wip.ng</p>
          <div className="socials">
            <Twitter size={18} />
            <Linkedin size={18} />
            <Instagram size={18} />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Women In Power. All rights reserved.
      </div>
    </footer>
  );
}