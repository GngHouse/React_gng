import "./Production.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Production2() {
  return (
    <div className="Production2">
      <div className="pro2center">
        <div className="pro1space">
          <a href="#sectionSeven">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="pro1"
            >
              <img className="proimg" src="/img/웨딩.jpeg"></img>
              <span className="protext">웨딩</span>
            </motion.div>
          </a>
          <div className="pro1">
            <span className="pro공간">공간 연출</span>
            <span className="pro설명">
              Party Styling 모임의 특성에 따라 웨딩, 소모임, 기업행사, 기념일,
              생일 등 다양한 테마에 맞는 분위기를 연출해 드립니다. House Wedding
              기존의 틀에 박힌 웨딩이 아닌, 결혼 본연의 의미를 최우선으로 하여
              고객의 취향을 반영한 컨셉, 컬러, 예산 등 고객의 의견 수렴을 통해
              영원히 잊지 못할 소중한 순간을 만들어 나갑니다. Party&Event 테마에
              맞는 맞춤형 장소를 컨택해 다양한 이벤트를 기획, 연출, 진행해
              드립니다.
            </span>
          </div>
          <a href="#sectionEight">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="pro1"
            >
              <img className="proimg" src="/img/공간연출2.jpeg"></img>
              <span className="protext">공간연출2</span>
            </motion.div>
          </a>
        </div>
        <div className="pro2space">
          <a href="#sectionNine">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="pro1"
            >
              <img className="proimg" src="/img/공간연출3.jpeg"></img>
              <span className="protext">공간연출3</span>
            </motion.div>
          </a>
          <a href="#sectionTen">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="pro1"
            >
              <img className="proimg" src="/img/공간연출4.jpeg"></img>
              <span className="protext">공간연출4</span>
            </motion.div>
          </a>
          <a href="#sectionEleven">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="pro1"
            >
              <img className="proimg" src="/img/공간연출5.jpeg"></img>
              <span className="protext">공간연출5</span>
            </motion.div>
          </a>
        </div>
      </div>
      <div className="promedia">
        <div className="boxmedia">
          {/* <span className="media공간연출">공간 연출</span> */}
          {/* <span className="mediatext">
            Party Styling 모임의 특성에 따라 웨딩, 소모임, 기업행사, 기념일,
            생일 등 다양한 테마에 맞는 분위기를 연출해 드립니다. House Wedding
            기존의 틀에 박힌 웨딩이 아닌, 결혼 본연의 의미를 최우선으로 하여
            고객의 취향을 반영한 컨셉, 컬러, 예산 등 고객의 의견 수렴을 통해
            영원히 잊지 못할 소중한 순간을 만들어 나갑니다. Party&Event 테마에
            맞는 맞춤형 장소를 컨택해 다양한 이벤트를 기획, 연출, 진행해
            드립니다.
          </span> */}
        </div>
        <a href="#sectionSeven">
          <div className="boxmedia">
            <img className="proimg" src="/img/웨딩.jpeg"></img>
          </div>
        </a>
        <a href="#sectionEight">
          <div className="boxmedia">
            <img className="proimg" src="/img/공간연출2.jpeg"></img>
          </div>
        </a>
        <a href="#sectionNine">
          <div className="boxmedia">
            <img className="proimg" src="/img/공간연출3.jpeg"></img>
          </div>
        </a>
        <a href="#sectionTen">
          <div className="boxmedia">
            <img className="proimg" src="/img/공간연출4.jpeg"></img>
          </div>
        </a>
        <a href="#sectionEleven">
          <div className="boxmedia">
            <img className="proimg" src="/img/공간연출5.jpeg"></img>
          </div>
        </a>
      </div>
    </div>
  );
}
