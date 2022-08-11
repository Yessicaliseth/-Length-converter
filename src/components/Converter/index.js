import './style.css';
import { PAIRS, LONGITUDES } from './const';
import { actions } from './utils';

export default function ConverterComponent() {
    async function getResponse(){
    
        const value = document.querySelector(".container__questions--input").value;
        document.querySelector(".container__response").style.display = "grid";
    
        const response = document.querySelector(".container__response");
        const newH3 = document.createElement("h3");
        newH3.classList.add("container__response--h3");
        response.append(newH3);
        
    
        const convertFrom = document.querySelector("[name='convertFrom']");
        const convertTo = document.querySelector("[name='convertTo']");
        const config = PAIRS[`${convertFrom.value}_${convertTo.value}`];
        const convertFromText = convertFrom.options[convertFrom.selectedIndex].innerText;
        const convertToText = convertTo.options[convertTo.selectedIndex].innerText;
        // const config = PAIRS.KM_HM
       
        
        
        newH3.innerHTML = `${value} ${(convertFromText)} equivalen a ${(actions[config.operation](value, config.value))} ${(convertToText)}  `;
        // console.log(actions[config.operation](value, config.value))  

    
    }
    


    return (
        <div className='converterComponent'>
            <main className="container">
                <section className="container__title">
                    <h1>Convertidor de Longitudes</h1>
                </section>
                <section className="container__questions">
                    <div>
                        <h2 className="container__questions--h2">Que valor y que unidad de medida quieres convertir?</h2>
                        <input type="number" placeholder="Valor Numerico" className="container__questions--input"/>
                        <OptionComponent
                            name="convertFrom"
                        >
                        </OptionComponent>
                    </div>
                    <div>
                        <h2 className="container__questions--h2">A que medida la quieres convertir?</h2>
                        <OptionComponent
                            name="convertTo"
                        >
                        </OptionComponent>
                    </div>
                    <button className="container__button" onClick={getResponse}>CONVERTIR</button>
                </section>
                
                <section className="container__response">
                </section>
            </main>
        </div>
        
    );
}

function OptionComponent(props) {
    // console.log("OptionComponent", props);

    return(
        <select name={props.name} id="" className="oneQuestion">
            {
                LONGITUDES.map(long=> {
                    return (
                        <option value={long.value}>{long.uiName}</option>
                    )
                })
            }
        </select>
    );
}