import React, { useEffect, useState, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import "primereact/resources/themes/lara-light-blue/theme.css";

function Nilton() {
  const [dadosCuritiba, setDadosCuritiba] = useState(null);

  /* #region GET API CWB */
  //Consultar dados GET API CWB
  /*function loadListStatus(data) {
    const newListStatus = data.map((cwb) => {
      return {
        temp: cwb.temp,
        date: cwb.date,
        city_name: cwb.city_name,
        min: cwb.forecast.min,
        max: cwb.forecast.max,
      };
    });
    setDadosCuritiba(newListStatus);

  }*/

  //Consultar dados GET API CWB
  useEffect(() => {
    createListStatus2();
  }, []);

  //useEffect(() => {}, [dadosCuritiba]);

  async function createListStatus() {
    try {
      fetch(
        `https://api.hgbrasil.com/weather?format=json-cors&array_limit=1&fields=only_results,temp,city_name,forecast,max,min,date&key=f31e37de&woeid=455822`
      )
        .then((result) => result.json())
        .then((data) => {
          //loadListStatus(data);
          setDadosCuritiba(data);
          console.log(data);
        });
    } catch (error) {
      console.error(error);
    }
  }

  async function createListStatus2() {
    try {
      fetch(
        `https://api.hgbrasil.com/weather?format=json-cors&array_limit=1&fields=only_results,temp,city_name,forecast,max,min,date&key=f31e37de&woeid=455822`
      )
        .then((result) => result.json())
        .then((data) => {
            const newListStatus = [data].map((cwb) => {
                return {
                    city_name: cwb.city_name,
                    max: cwb.forecast[0].max,
                    min: cwb.forecast[0].min,
                };
              });
          setDadosCuritiba(newListStatus);
          console.log(newListStatus);
        });
    } catch (error) {
      console.error(error);
    }
  }

  // FIM Consultar dados GET API CWB
  /* #endregion */

  //const teste = [{ field: "", label: "oi", city_name: dadosCuritiba.city_name }];

  return (
    <div>
      <div className="card">
        <DataTable
          value={dadosCuritiba}
          responsiveLayout="scroll"
          emptyMessage="Lista vazia."
        >
          <Column field="min" header="Min"></Column>
          <Column field="max" header="Max"></Column>
          <Column field="city_name" header="Cidade"></Column>
        </DataTable>
      </div>
    </div>
  );
}

export default Nilton;
