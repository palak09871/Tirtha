import "./HeroStyles.css";
function Hero() {
  return (
    <>
      <div className="hero">
        <img
          alt="HerpImg"
          src="https://plus.unsplash.com/premium_photo-1661963649278-db5e2697d0be?auto=format&fit=crop&q=80&w=1772&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className="hero-text">
          <h1>Your travels, our provisions</h1>
          <p>Let us help out your pilgrimage travles</p>
        </div>
      </div>
    </>
  );
}

export default Hero;
