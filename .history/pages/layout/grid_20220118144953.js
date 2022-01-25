
const Grid = () => {
    return (
        <div className="grid grid-cols-4 gap-4 m-12">
            <div className="border bg-red-300　flex justify-center">
                <p className="bg-pink-200">a</p>
            </div>
            <div className="border col-span-2 bg-cyan-600 h-24">2</div>
            <div className="border">3</div>
            <div className="border col-span-2 bg-cyan-400 h-48">4</div>
            <div className="border">5</div>
            <div className="border">6</div>
            <div className="border">7</div>
            <div className="border">8</div>
            <div className="border col-span-2 bg-cyan-200 h-72">9</div>
        </div>
    )
}

export default Grid