import "./Nav.css";

export function Nav() {
  return (
    <div className="leftnav">
      <a href="#sectionOne">
        <div className="Nav_top">
          <span className="맨위">맨 위</span>
          <img className="up" src="/img/arrow.png"></img>
        </div>
      </a>
      <a href="#sectionSix">
        <div className="Nav_middle">
          <span className="nav공간연출">공간연출</span>
          <img className="middle" src="/img/원.png"></img>
        </div>
      </a>
      <a href="#sectionEleven">
        <div className="Nav_bottom">
          <span className="맨밑">맨 밑</span>
          <img className="down" src="/img/arrow.png"></img>
        </div>
      </a>
    </div>
  );
}
