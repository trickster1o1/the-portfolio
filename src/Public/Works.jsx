export default function Works(props) {
  const data = [
    {
      name: "SEC Nepal",
      src: "https://upload.wikimedia.org/wikipedia/commons/0/04/S-Bahn-Logo_Salzburg.png",
      url: "https://secnepal.org",
    },
    {
      name: "Vastu Hotel",
      src: "https://vastuhotel.com/uploads/vastu_logo.png",
      url: "https://vastuhotel.com",
    },{
      name: "Pacific Engineering Co. Pvt. Ltd.",
      src: "https://pacificeng.com.np/wp-content/uploads/2020/01/logo.png",
      url: "https://pacificeng.com.np",
    },{
      name: "Jawhara Invest",
      src: "https://jawharainvest.com/static/media/mainLogo.1d9fd86241cc6668ffe4.png",
      url: "https://jawharainvest.com",
    },{
      name: "Chainge Digital Pvt. Ltd.",
      src: "https://chaingedigital.com.np/static/media/logo.0e2f3c1a214f6bb135f6.jpg",
      url: "https://chaingedigital.com.np",
    },{
      name: "Avani Nepal",
      src: "https://avaninepal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favani_logo.3f4c62aa.jpg&w=64&q=75",
      url: "https://avaninepal.com",
    },{
      name: "Shiva Travels Pvt. Ltd.",
      src: "https://shivatravels.com.np/logoNeg.png",
      url: "https://shivatravels.com.np",
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
