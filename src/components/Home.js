import "./Home.css";

export function Home() {
  return (
    <div className="Home">
      <img src="/img/bg.gif" className="homeimg"></img>
      <div className="homecenter">
        <div className="homespace">
          <div className="homeleft">
            <span className="subtit">
              House Party & Wedding, Space rental & production
            </span>
            <div className="maintit">
              <span className="maintit_GNG">GNG</span>
              <span className="maintit_HOUSE">HOUSE</span>
            </div>
          </div>
          <div className="homeright"></div>
        </div>
        <div className="homebottom">
          <span className="homebottom_text">GIVE & GIVE</span>
        </div>
      </div>
      <div className="smallhome">
        <div className="smallbox">
          <span className="smgng">
            GNG
            <br />
          </span>
          <span className="smhouse">HOUSE</span>
          <span className="smsub">
            House Party <br /> Wedding, Space rental <br /> production
          </span>
        </div>
      </div>
    </div>
  );
}
