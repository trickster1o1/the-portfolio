import secnepal from "./devs/secnepal.png";
import vastu from "./devs/vastu.png";
import chainge from "./devs/chainge.png";
import shiva from "./devs/shiva.png";
import jawhara from "./devs/jawhara.png";
import avani from "./devs/avani.png";
import pacific from "./devs/pacific.png";
import rugs from "./devs/rugs.png";

export default function Works(props) {
  const data = [
    {
      name: "SEC Nepal",
      src: secnepal,
      url: "https://secnepal.org",
    },
    {
      name: "Vastu Hotel",
      src: vastu,
      url: "https://vastuhotel.com",
    },{
      name: "Pacific Engineering Co. Pvt. Ltd.",
      src: pacific,
      url: "https://pacificeng.com.np",
    },{
      name: "Jawhara Invest",
      src: jawhara,
      url: "https://jawharainvest.com",
    },{
      name: "Chainge Digital Pvt. Ltd.",
      src: chainge,
      url: "https://chaingedigital.com.np",
    },{
      name: "Avani Nepal",
      src: avani,
      url: "https://avaninepal.com",
    },{
      name: "Shiva Travels Pvt. Ltd.",
      src: shiva,
      url: "https://shivatravels.com.np",
    },
    {
      name: "NP Rugs",
      src: rugs,
      url: "https://www.nprugs.com",
    },    
  ];
  return (
    <div className="main-cont container contact" id="work" ref={props.workRef}>
      <span>Works I've Done</span>
      <h2 style={{ marginBottom: "1em" }}>My Works</h2>
      <div className="work-cont">
        {data
          ? data.map((d, index) => 
              <a key={index} href={d.url} target="_blank" rel="noreferrer">
                <img
                  src={d.src}
                  alt={d.name}
                  width="auto"
                  height="auto"
                  title={d.name}
                />
              </a>
            )
          : null}
      </div>
    </div>
  );
}
