import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from 'primereact/inputtext';


import "primereact/resources/themes/saga-orange/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 

function Nilton() {
  const [globalFilter1, setGlobalFilter1] = useState('');
  const [listaCwb, setListaCwb] = useState([]);
  const [listaCgh, setListaCgh] = useState([]);
  const [listaCnf, setListaCnf] = useState([]);
  const [listaSdu, setListaSdu] = useState([]);
  const [listaBsb, setListaBsb] = useState([]);
  const [listaBel, setListaBel] = useState([]);
  const [listaSsa, setListaSsa] = useState([]);
  const [listaFor, setListaFor] = useState([]);
  const [listaMao, setListaMao] = useState([]);
  const [listaJpa, setListaJpa] = useState([]);
  const [listaTotal, setListaTotal] = useState([]);

  const listaStatusTableHeader = (
    <div className="table-header">
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText value={globalFilter1} onChange={(e) => setGlobalFilter1(e.target.value)} placeholder="Cidade / Temperatura" />
      </span>
    </div>
  );


  //curitiba
    function loadListStatus(data) {
      const newListStatus = [data].map((cwb) => {
        return {
          temp: cwb.temp,
          date: cwb.date,
          city_name: cwb.city_name,
          min: cwb.forecast[0].min,
          max: cwb.forecast[0].max,
        };
      });
      setListaCwb(newListStatus);
    }
    
      //Consultar dados GET API de Cidades
      useEffect(() => {
        async function createListStatus() {
          try {
            fetch(
              `https://api.hgbrasil.com/weather?format=json-cors&array_limit=1&fields=only_results,temp,city_name,forecast,max,min,date&key=3341767c&woeid=455822`
            )
              .then((result) => result.json())
              .then((data) => {
                  loadListStatus(data);
                  console.log("DATA - ",data);
              });
          } catch (error) {
            console.error(error);
          }
        }
        createListStatus();
      }, []);

//são paulo
      function loadListStatus2(data) {
        const newListStatus = [data].map((sp) => {
          return {
            temp: sp.temp,
            date: sp.date,
            city_name: sp.city_name,
            min: sp.forecast[0].min,
            max: sp.forecast[0].max,
          };
        });
        setListaCgh(newListStatus);
      }
      
        //Consultar dados GET API de Cidades
        useEffect(() => {
          async function createListStatus2() {
            try {
              fetch(
                `https://api.hgbrasil.com/weather?format=json-cors&array_limit=1&fields=only_results,temp,city_name,forecast,max,min,date&key=3341767c&woeid=455827`
              )
                .then((result) => result.json())
                .then((data) => {
                    loadListStatus2(data);
                    console.log("DATA - ",data);
                });
            } catch (error) {
              console.error(error);
            }
          }
          createListStatus2();
        }, []);

//BH
        function loadListStatus3(data) {
          const newListStatus = [data].map((cnf) => {
            return {
              temp: cnf.temp,
              date: cnf.date,
              city_name: cnf.city_name,
              min: cnf.forecast[0].min,
              max: cnf.forecast[0].max,
            };
          });
          setListaCnf(newListStatus);
        }
        
          //Consultar dados GET API de Cidades
          useEffect(() => {
            async function createListStatus3() {
              try {
                fetch(
                  `https://api.hgbrasil.com/weather?format=json-cors&array_limit=1&fields=only_results,temp,city_name,forecast,max,min,date&key=3341767c&woeid=455821`
                )
                  .then((result) => result.json())
                  .then((data) => {
                      loadListStatus3(data);
                      console.log("DATA - ",data);
                  });
              } catch (error) {
                console.error(error);
              }
            }
            createListStatus3();
          }, []);

          //Rio de Janeiro
        function loadListStatus4(data) {
          const newListStatus = [data].map((sdu) => {
            return {
              temp: sdu.temp,
              date: sdu.date,
              city_name: sdu.city_name,
              min: sdu.forecast[0].min,
              max: sdu.forecast[0].max,
            };
          });
          setListaSdu(newListStatus);
        }
        
          //Consultar dados GET API de Cidades
          useEffect(() => {
            async function createListStatus4() {
              try {
                fetch(
                  `https://api.hgbrasil.com/weather?format=json-cors&array_limit=1&fields=only_results,temp,city_name,forecast,max,min,date&key=3341767c&woeid=455825`
                )
                  .then((result) => result.json())
                  .then((data) => {
                      loadListStatus4(data);
                      console.log("DATA - ",data);
                  });
              } catch (error) {
                console.error(error);
              }
            }
            createListStatus4();
          }, []);

          //Brasilia
        function loadListStatus5(data) {
          const newListStatus = [data].map((bsb) => {
            return {
              temp: bsb.temp,
              date: bsb.date,
              city_name: bsb.city_name,
              min: bsb.forecast[0].min,
              max: bsb.forecast[0].max,
            };
          });
          setListaBsb(newListStatus);
        }
        
          //Consultar dados GET API de Cidades
          useEffect(() => {
            async function createListStatus5() {
              try {
                fetch(
                  `https://api.hgbrasil.com/weather?format=json-cors&array_limit=1&fields=only_results,temp,city_name,forecast,max,min,date&key=3341767c&woeid=455819`
                )
                  .then((result) => result.json())
                  .then((data) => {
                      loadListStatus5(data);
                      console.log("DATA - ",data);
                  });
              } catch (error) {
                console.error(error);
              }
            }
            createListStatus5();
          }, []);

          //Belem
        function loadListStatus6(data) {
          const newListStatus = [data].map((bel) => {
            return {
              temp: bel.temp,
              date: bel.date,
              city_name: bel.city_name,
              min: bel.forecast[0].min,
              max: bel.forecast[0].max,
            };
          });
          setListaBel(newListStatus);
        }
        
          //Consultar dados GET API de Cidades
          useEffect(() => {
            async function createListStatus6() {
              try {
                fetch(
                  `https://api.hgbrasil.com/weather?format=json-cors&array_limit=1&fields=only_results,temp,city_name,forecast,max,min,date&key=3341767c&woeid=455820`
                )
                  .then((result) => result.json())
                  .then((data) => {
                      loadListStatus6(data);
                      console.log("DATA - ",data);
                  });
              } catch (error) {
                console.error(error);
              }
            }
            createListStatus6();
          }, []);

          //Salvador
        function loadListStatus7(data) {
          const newListStatus = [data].map((ssa) => {
            return {
              temp: ssa.temp,
              date: ssa.date,
              city_name: ssa.city_name,
              min: ssa.forecast[0].min,
              max: ssa.forecast[0].max,
            };
          });
          setListaSsa(newListStatus);
        }
        
          //Consultar dados GET API de Cidades
          useEffect(() => {
            async function createListStatus7() {
              try {
                fetch(
                  `https://api.hgbrasil.com/weather?format=json-cors&array_limit=1&fields=only_results,temp,city_name,forecast,max,min,date&key=3341767c&woeid=455826`
                )
                  .then((result) => result.json())
                  .then((data) => {
                      loadListStatus7(data);
                      console.log("DATA - ",data);
                  });
              } catch (error) {
                console.error(error);
              }
            }
            createListStatus7();
          }, []);

          //Fortaleza
        function loadListStatus8(data) {
          const newListStatus = [data].map((fort) => {
            return {
              temp: fort.temp,
              date: fort.date,
              city_name: fort.city_name,
              min: fort.forecast[0].min,
              max: fort.forecast[0].max,
            };
          });
          setListaFor(newListStatus);
        }
        
          //Consultar dados GET API de Cidades
          useEffect(() => {
            async function createListStatus8() {
              try {
                fetch(
                  `https://api.hgbrasil.com/weather?format=json-cors&array_limit=1&fields=only_results,temp,city_name,forecast,max,min,date&key=3341767c&woeid=455830`
                )
                  .then((result) => result.json())
                  .then((data) => {
                      loadListStatus8(data);
                      console.log("DATA - ",data);
                  });
              } catch (error) {
                console.error(error);
              }
            }
            createListStatus8();
          }, []);

          //Manaus
        function loadListStatus9(data) {
          const newListStatus = [data].map((mao) => {
            return {
              temp: mao.temp,
              date: mao.date,
              city_name: mao.city_name,
              min: mao.forecast[0].min,
              max: mao.forecast[0].max,
            };
          });
          setListaMao(newListStatus);
        }
        
          //Consultar dados GET API de Cidades
          useEffect(() => {
            async function createListStatus9() {
              try {
                fetch(
                  `https://api.hgbrasil.com/weather?format=json-cors&array_limit=1&fields=only_results,temp,city_name,forecast,max,min,date&key=3341767c&woeid=455833`
                )
                  .then((result) => result.json())
                  .then((data) => {
                      loadListStatus9(data);
                      console.log("DATA - ",data);
                  });
              } catch (error) {
                console.error(error);
              }
            }
            createListStatus9();
          }, []);

          //João Pessoa
        function loadListStatus10(data) {
          const newListStatus = [data].map((jpa) => {
            return {
              temp: jpa.temp,
              date: jpa.date,
              city_name: jpa.city_name,
              min: jpa.forecast[0].min,
              max: jpa.forecast[0].max,
            };
          });
          setListaJpa(newListStatus);
        }
        
          //Consultar dados GET API de Cidades
          useEffect(() => {
            async function createListStatus10() {
              try {
                fetch(
                  `https://api.hgbrasil.com/weather?format=json-cors&array_limit=1&fields=only_results,temp,city_name,forecast,max,min,date&key=3341767c&woeid=455872`
                )
                  .then((result) => result.json())
                  .then((data) => {
                      loadListStatus10(data);
                      console.log("DATA - ",data);
                  });
              } catch (error) {
                console.error(error);
              }
            }
            createListStatus10();
          }, []);

        useEffect(() => {
          var arr3 = listaCwb.concat(listaCgh).concat(listaCnf).concat(listaSdu).concat(listaBsb).concat(listaBel).concat(listaSsa).concat(listaFor).concat(listaMao).concat(listaJpa);
          console.log("arr3 - ",arr3);
          setListaTotal(arr3);
          
        }, [listaCwb,listaCgh,listaCnf,listaSdu,listaBsb,listaBel,listaSsa,listaFor,listaMao,listaJpa]);






    return (
        <div className="p-grid">
          <h1>Previsão do tempo</h1>
            <div className="p-col-12">
                <div className="card">
                <DataTable
                  value={listaTotal}
                  emptyMessage="Lista Vazia."
                  globalFilter={globalFilter1}
                  header={listaStatusTableHeader}
                >
                    <Column
                    field="min"
                    header="MIN Cº"
                    sortable
                  ></Column>
                  <Column
                    field="max"
                    header="MAX Cº"
                    sortable
                  ></Column>
                  <Column
                    field="city_name"
                    header="Cidade"
                    sortable
                  ></Column>
                </DataTable>
                </div>
            </div>
        </div>
    );
}

export default Nilton;