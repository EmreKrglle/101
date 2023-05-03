import React, { useState } from "react";

export default function Landing() {
  function eventHandler(e) {
    saveName();
    saveName2();
    saveName3();
    saveName4();
  }
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");
  const [name4, setName4] = useState("");
  let [oneORTwo, oneOrtwoSeting] = useState();

  async function saveName() {
    await localStorage.setItem("name1", JSON.stringify(name1));
  }
  function saveName2() {
    localStorage.setItem("name2", JSON.stringify(name2));
  }
  function saveName3() {
    localStorage.setItem("name3", JSON.stringify(name3));
  }
  function saveName4() {
    localStorage.setItem("name4", JSON.stringify(name4));
  }
  return (
    <div className="mainLanding">
      <label className="title">101 Okey Hesaplama Aracı </label>
      <form
        className="oneORTwo"
        onClick={(e) => oneOrtwoSeting(e.target.value)}
      >
        <label>Oyun Türü</label>
        <br />
        <input type="radio" value={2} id="2" name="oneOrtwoSeting"></input>
        <label for="2">Eşli</label>
        <br />
        <input type="radio" value={4} id="4" name="oneOrtwoSeting"></input>
        <label for="3">Tek</label>
        <br />
      </form>
      {oneORTwo && (
        <div>
          {oneORTwo < 3 ? (
            <form className="teams" onSubmit={eventHandler}>
              <div>
                <label> 1. Takım İsmi</label>
                <input
                  onChange={(e) => setName1(e.target.value)}
                  className="firstTeamName"
                ></input>
              </div>
              <div>
                <label> 2. Takım İsmi</label>
                <input
                  onChange={(e) => setName2(e.target.value)}
                  className="secondTeamName"
                ></input>
              </div>
              <button  type="submit" className="start" onClick={ ()=> setInterval(()=>{
                window.open("/okey101", "_self")
                
              },2)}>
                 
                  Start
                
              </button>
            </form>
          ) : (
            <form className="teams4" onSubmit={eventHandler}>
              <div>
                <label> 1. Takım İsmi</label>
                <input
                  onChange={(e) => setName1(e.target.value)}
                  className="firstTeamName"
                ></input>
              </div>
              <div>
                <label> 2. Takım İsmi</label>
                <input
                  onChange={(e) => setName2(e.target.value)}
                  className="secondTeamName"
                ></input>
              </div>
              <div>
                <label> 3. Takım İsmi</label>
                <input
                  onChange={(e) => setName3(e.target.value)}
                  className="thirdTeamName"
                ></input>
              </div>
              <div>
                <label> 4. Takım İsmi</label>
                <input
                  onChange={(e) => setName4(e.target.value)}
                  className="fourthTeamName"
                ></input>
              </div>
              <button  type="submit" className="start" onClick={ ()=> setInterval(()=>{
                window.open("/okey104", "_self")
                
              },2)}>
                {" "}
                Start
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
