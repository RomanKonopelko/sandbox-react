

const MyInput = ({ type, placeholder, title, range }) => {
    console.log(range);
    return <>
        <span>{title}</span>
        <br />
        { range
            ? <input type={type} placeholder={placeholder} min={range.min} max={range.max} />
            : <input type={type} placeholder={placeholder} />}

        <br />
    </>
}

export default MyInput