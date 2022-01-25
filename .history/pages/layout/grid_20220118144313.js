
const Grid = () => {
    return (
        <div className="grid grid-cols-4">
            <div className="border">1</div>
            <div className="border col-span-2">2</div>
            <div className="border">3</div>
            <div className="border col-span-2">4</div>
            <div className="border">5</div>
            <div className="border">6</div>
            <div className="border">7</div>
            <div className="border">8</div>
            <div className="border col-span-2">9</div>
        </div>
    )
}

export default Grid