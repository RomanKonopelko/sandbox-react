

const MyButton = ({ btnName }) => {
    const handleClick = () => { 
        alert(`You just clicked '${btnName}' button`)
    }

    return <button onClick={handleClick}>{btnName}</button>
}


export default MyButton