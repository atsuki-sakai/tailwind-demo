
const Grid = () => {
    return (
        <div className="grid grid-cols-4 gap-4 m-12">
            <div className="border bg-red-300">
                <p className="bg-pink-200 text-center py-9">1</p>
            </div>
            <div className="border col-span-2 bg-cyan-600">
                <p className="bg-purple-200 text-center py-9">2</p>
            </div>
            <div className="border">
                <p className="bg-orange-200 text-center py-9">3</p>
            </div>
            <div className="border col-span-2 bg-cyan-400">
                <p className="bg-green-200 text-center py-9">4</p>
            </div>
            <div className="border">
                <p className="bg-cyan-200 text-center py-9">5</p>
            </div>
            <div className="border">
                <p className="bg-blue-200 text-center py-9">6</p>
            </div>
            <div className="border">
                <p className="bg-lime-200 text-center py-9">7</p>
            </div>
            <div className="border">
                <p className="bg-red-200 text-center py-9">8</p>
            </div>
            <div className="border">
                <p className="bg-indigo-200 text-center py-9">1</p>
            </div>
        </div>
    )
}

export default Grid