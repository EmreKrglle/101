import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function Event2() {
  const [firstPoint, setFirstPoint] = useState();
  const [secondPoint, setSecondPoint] = useState();
  const [thirdPoint, setThirdPoint] = useState();
  const [fourthPoint, setFourthPoint] = useState();
 
  const [hesap, setHesap] = useState();
  const [people, setpeople] = useState();
   
  let toplam = 0;
  let toplam2 = 0;
  let toplam3 = 0;
  let toplam4 = 0;
  let firstInput = document.querySelector(".firstInput");
  let secondInput = document.querySelector(".secondInput");
  let thirdInput = document.querySelector(".thirdInput");
  let fourthInput = document.querySelector(".fourthInput");
  // takım isimleri-----------------------------

  let name1 = JSON.parse(localStorage.getItem("name1"));
  let name2 = JSON.parse(localStorage.getItem("name2"));
  let name3 = JSON.parse(localStorage.getItem("name3"));
  let name4 = JSON.parse(localStorage.getItem("name4"));

  //------------------------------------------
  let itemsArray = localStorage.getItem("items")
    ? JSON.parse(localStorage.getItem("items"))
    : [];
  let itemsArray2 = localStorage.getItem("items2")
    ? JSON.parse(localStorage.getItem("items2"))
    : [];
  let itemsArray3 = localStorage.getItem("items3")
    ? JSON.parse(localStorage.getItem("items3"))
    : [];
  let itemsArray4 = localStorage.getItem("items4")
    ? JSON.parse(localStorage.getItem("items4"))
    : [];
  let toplamDb = localStorage.getItem("total")
    ? localStorage.getItem("total")
    : 0;
  let toplamDb2 = localStorage.getItem("total2")
    ? localStorage.getItem("total2")
    : 0;
  let toplamDb3 = localStorage.getItem("total3")
    ? localStorage.getItem("total3")
    : 0;
  let toplamDb4 = localStorage.getItem("total4")
    ? localStorage.getItem("total4")
    : 0;

  
  function remove() {
    localStorage.clear();
    itemsArray = [];
    itemsArray2 = [];
    itemsArray3 = [];
    itemsArray4 = [];
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
  function addTask3(text) {
    const table3 = document.createElement("table");

    table3.textContent = text;

    table3.id = "table3";
    document.querySelector(".thirdForm").appendChild(table3);
  }
  function addTask4(text) {
    const table4 = document.createElement("table");

    table4.textContent = text;

    table4.id = "table4";
    document.querySelector(".fourthForm").appendChild(table4);
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
  async function add3() {
    itemsArray3.push(thirdInput.value);
    localStorage.setItem("items3", JSON.stringify(itemsArray3));
    result3();
    await addTask3(thirdInput.value);
    thirdInput.value = "";

    localStorage.setItem("total3", toplam3);
  }
  async function add4() {
    itemsArray4.push(fourthInput.value);
    localStorage.setItem("items4", JSON.stringify(itemsArray4));
    result4();
    await addTask4(fourthInput.value);
    fourthInput.value = "";

    localStorage.setItem("total4", toplam4);
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
  function result3() {
    for (let i = 0; i < itemsArray3.length; i++) {
      toplam3 += Number(itemsArray3[i]);
    }
  }
  function result4() {
    for (let i = 0; i < itemsArray4.length; i++) {
      toplam4 += Number(itemsArray4[i]);
    }
  }
  useEffect(() => {
    itemsArray.forEach(addTask);
    itemsArray2.forEach(addTask2);
    itemsArray3.forEach(addTask3);
    itemsArray4.forEach(addTask4);
  }, []);
  return (
    <div className="main">
      <a className="mainpageBtn" href="/">
        {" "}
        <i className="fa fa-home"></i>
      </a>
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
        <div className="thirdPart">
          <div className="thirdForm">
            <label>{name3}</label>
            <input
              type="number"
              className="thirdInput"
              onChange={(e) => setThirdPoint(e.target.value)}
            ></input>
          </div>
          <button onClick={() => add3()}>Ekle</button>
        </div>
        <div className="fourthPart">
          <div className="fourthForm">
            <label>{name4}</label>
            <input
              type="number"
              className="fourthInput"
              onChange={(e) => setFourthPoint(e.target.value)}
            ></input>
          </div>
          <button onClick={() => add4()}>Ekle</button>
        </div>
      </form>

      <Popup
        trigger={<button className="calculate">Hesapla</button>}
        position={"center-center"}
        className="popupMain"
      >
        <a className="close" href="/okey104">
          &times;
        </a>
        <table className="table">
          <tr>
            <td>{name1}</td>
            <td>{toplamDb}</td>
          </tr>
          <tr>
            <td>{name2}</td>
            <td>{toplamDb2}</td>
          </tr>
          <tr>
            <td>{name3}</td>
            <td>{toplamDb3}</td>
          </tr>
          <tr>
            <td>{name4}</td>
            <td>{toplamDb4}</td>
          </tr>
          
        </table>

        <div className="winner">
          <div>
            <form className="hesapSection">
              <label for="hesap">Hesap</label>
              <input
                id="hesap"
                type="number"
                onChange={(e) => setHesap(e.target.value)}
              ></input>
            </form>
            <form
              className="inputForms"
              onClick={(e) => setpeople(e.target.value)}
            >
              <label>Kişi Sayısı:</label>
              <br />
              <input type="radio" value={2} id="2" name="peopleSeting"></input>
              <label for="2">2</label>
              <br />
              <input type="radio" value={3} id="3" name="peopleSeting"></input>
              <label for="3">3</label>
              <br />
              <input type="radio" value={4} id="4" name="peopleSeting"></input>
              <label for="4">4</label>
              <br />
              <input type="radio" value={5} id="5" name="peopleSeting"></input>
              <label for="5">5</label>
              <br />
              <input type="radio" value={6} id="6" name="peopleSeting"></input>
              <label for="6">6</label>
              <br />
              <input type="radio" value={7} id="7" name="peopleSeting"></input>
              <label for="7">7</label>
              <br />
            </form>
            <h4 className="lanyeter">
              {" "}
              {people && (
                <div className="sikicem">
                  <h4>Kişi Başı= </h4>{" "}
                  <h3 className="gösterge"> {hesap / people} TL </h3>
                </div>
              )}
            </h4>
          </div>
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
