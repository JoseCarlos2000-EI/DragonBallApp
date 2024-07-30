import { useEffect, useState } from "react"
import InputSearch from "./components/InputSearch"
import CardWarrior from "./components/CardWarrior";
import getWarriors from "./helpers/getWarriors";
import Swal from "sweetalert2";

const DbzApp = () => {
    const [inputValue, setInputValue] = useState('Goku');
    const [warriors, setWarriors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const setWarriorAPI = async (warrior) => {
        const data = await getWarriors(warrior);
        setWarriors(data);
        setIsLoading(false);
    }

    const setWarrior = (warrior) => {
        setInputValue(warrior);
        setIsLoading(true);
    }

    useEffect(() => {
            if (!inputValue) {
                setWarriors([]);
                setIsLoading(false);
                Swal.fire({
                    icon: "warning",
                    title: "Oops...",
                    text: "No se encontraron registros...",
                  });
                return;
            };
            setWarriorAPI(inputValue);
        },[inputValue]
    )

    return (
        <>
            <div className="findWarrior">
                <InputSearch
                    type='text'
                    plh='Ingrese el guerrero'
                    warrior={inputValue}
                    setWarrior={setWarrior}
                />
            </div>
            {
                isLoading ?
                <div className="card-warriors">Cargando...</div>
                :
                null
            }
            {
                !isLoading && warriors.length<=0?
                <div className="card-warriors">No existen registros para mostrar</div>
                :
                null
            }
            <div className="card-warriors">
                {
                    warriors.map(warrior =>
                    (
                        <CardWarrior
                            key={warrior.id}
                            {...warrior}
                        />
                    )
                    )
                }
            </div>
        </>
    )
}

export default DbzApp
