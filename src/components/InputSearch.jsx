
const InputSearch = ({type, plh, setWarrior, warrior}) => {

  const handleChange = ({target}) => {

    setWarrior(target.value);
  }

  return (
    <input 
    type={type}
    placeholder= {plh}
    onChange={handleChange}
    value = {warrior}
    />
  )
}

export default InputSearch
