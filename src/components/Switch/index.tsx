import Switcher from 'react-switch'

export const Switch = () => {


    function handleTheme(){
      
    }

    return (
        <Switcher
        checked={false}
        onChange={handleTheme}
        width={45}
        handleDiameter={22}
        height={15}
        checkedIcon={false}
        uncheckedIcon={false}
    />
    )
}

export default Switch

