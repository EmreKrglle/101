import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function Event() {
  const [firstPoint, setFirstPoint] = useState();
  const [secondPoint, setSecondPoint] = useState();
  const [hesap, setHesap] = useState();
  const [people, setpeople] = useState();

  let toplam = 0;
  let toplam2 = 0;
  let firstInput = document.querySelector(".firstInput");
  let secondInput = document.querySelector(".secondInput");
  // takım isimleri-----------------------------

  let name1 = JSON.parse(localStorage.getItem("name1"));
  let name2 = JSON.parse(localStorage.getItem("name2"));

  //------------------------------------------
  let itemsArray = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];
  let itemsArray2 = localStorage.getItem("items2")
    ? JSON.parse(localStorage.getItem("items2"))
    : [];
  let toplamDb = localStorage.getItem("total")
    ? localStorage.getItem("total")
    : 0;
  let toplamDb2 = localStorage.getItem("total2")
    ? localStorage.getItem("total2")
    : 0;
  let gap = toplamDb > toplamDb2 ? toplamDb - toplamDb2 : toplamDb2 - toplamDb
  function remove() {
    localStorage.clear();
    itemsArray = [];
    itemsArray2 = [];
  }


  function addTask(text) {
    const table = document.createElement("table");
    table.textContent = text;
    table.id = "table";

    document.querySelector(".firstForm").appendChild(table);
  }
  function addTask2(text) {
    const table2 = document.createElement("table");

    table2.textContent = text;

    table2.id = "table2";
    document.querySelector(".secondForm").appendChild(table2);
  }

  async function add() {
    itemsArray.push(firstInput.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    result();
    await addTask(firstInput.value);
    firstInput.value = "";

    localStorage.setItem("total", toplam);
  }
  async function add2() {
    itemsArray2.push(secondInput.value);
    localStorage.setItem("items2", JSON.stringify(itemsArray2));
    result2();
    await addTask2(secondInput.value);
    secondInput.value = "";

    localStorage.setItem("total2", toplam2);
  }

  function result() {
    for (let i = 0; i < itemsArray.length; i++) {
      toplam += Number(itemsArray[i]);
    }
  }
  function result2() {
    for (let i = 0; i < itemsArray2.length; i++) {
      toplam2 += Number(itemsArray2[i]);
    }
  }
  useEffect(() => {
    itemsArray.forEach(addTask);
    itemsArray2.forEach(addTask2);
  }, []);


  return (
    <div className="main">
      <a className="mainpageBtn" href="/"> <i className="fa fa-home"></i></a>
      <form className="forms">
        <div className="firstPart">
          <div className="firstForm">
            <label>{name1}</label>
            <input
              type="number"
              className="firstInput"
              onChange={(e) => {
                setFirstPoint(e.target.value);
              }}
            ></input>
          </div>

          <button
            onClick={() => {
              add();
            }}
          >
            Ekle
          </button>
        </div>
        <div className="secondPart">
          <div className="secondForm">
            <label>{name2}</label>
            <input
              type="number"
              className="secondInput"
              onChange={(e) => setSecondPoint(e.target.value)}
            ></input>
          </div>
          <button onClick={() => add2()}>Ekle</button>
        </div>
      </form>

      <Popup
        trigger={<button className="calculate">Hesapla</button>}
        position={"center-center"}
        className="popupMain"
      >
        <a class="close" href="/okey101">&times;</a>
            <table className="table">
              <tr>
                <td>
                {name1}
                </td>
                <td>
                  {toplamDb}
                </td>
              </tr>
              <tr>
                <td>
                {name2}
                </td>
                <td>
                  {toplamDb2}
                </td>
                </tr>
                <tr>
                <td>
                  Fark
                </td>
                <td>
                  {gap}
                </td>
              </tr>
            </table>
 

        <div className="winner">
          
          {gap===0 ? <h2>Berabere</h2>:
          
          <div> 
                  {toplamDb > toplamDb2 ? (
            <h2>Kazanan <i className="	fa fa-arrow-right"></i> {name2}</h2>
          ) : (
            <h2>Kazanan <i className="	fa fa-arrow-right"></i> {name1}</h2>
          )}
          <form className="hesapSection">

          <label for="hesap">Hesap</label>
          <input id="hesap" type="number" onChange={(e)=>setHesap(e.target.value)}></input>
        
          </form>
          <form className="inputForms" onClick={(e)=>setpeople(e.target.value)}>
            <label>Kişi Sayısı:</label><br/>
            <input  type="radio" value={2} id="2" name="peopleSeting" ></input>
            <label for="2">2</label><br/>
            <input type="radio" value={3} id="3" name="peopleSeting" ></input>
            <label for="3">3</label><br/>
            <input type="radio" value={4} id="4" name="peopleSeting" ></input>
            <label for="4">4</label><br/>
            <input type="radio" value={5} id="5" name="peopleSeting"  ></input>
            <label for="5">5</label><br/>
            <input type="radio" value={6} id="6"  name="peopleSeting"></input>
            <label for="6">6</label><br/>
            <input type="radio" value={7} id="7" name="peopleSeting" ></input>
            <label for="7">7</label><br/>
            
          </form>
          <h4 className="lanyeter"> { people &&  <div className="sikicem"><h4  >Kişi Başı=  </h4> <h3 className="gösterge" > {hesap/people} TL </h3></div> }</h4>
          
          </div>
          
}
        </div>
        
        
        <div className="buttonGroup">
          <button
            className="newGame"
            type="submit"
            onClick={async () => {
              let x = window.confirm(
                "Tüm Kayıtlar Silinecek ve Yeni oyun Başlayacak"
              );
              if (x === true) {
                await window.open("/", "_self");
                remove();
              }
            }}
          >
            Yeni Oyun
          </button>
         
        </div>

      </Popup>
      <button
        className="newGame"
        type="submit"
        onClick={async () => {
          let x = window.confirm(
            "Tüm Kayıtlar Silinecek ve Yeni oyun Başlayacak"
          );
          if (x === true) {
            await window.open("/", "_self");
            remove();
          }
        }}
      >
        Yeni Oyun
      </button>

    </div>
  );
}
