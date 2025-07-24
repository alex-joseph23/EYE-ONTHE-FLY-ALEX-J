import "./footer.css";
function Footer() {
  //footer component
  return (
    <footer className="site-footer">
      <div>
        <p>© 2025 Eye On The Fly</p>
        {/* list of credits */}
        <ul className="footer-credits">
          <li>Home Page designed by Alexandra Joseph</li>
          <li>Map Page designed by Alex Joseph</li>
          <li>Submission Page designed by AJ</li>
          <li>Resource Page designed by 'Big Dawg' aka Alexandra Joseph</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
