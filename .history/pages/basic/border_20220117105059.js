export default function Border() {
    return (
        <div>
            <div className="flex justify-around">
                <div className="border border-red-500 mt-12 mx-12 w-12 text-center">0</div>
                <div className="border border-red-500 mt-12 mx-12 rounded-md w-12 text-center">1</div>
                <div className="border-4 border-pink-500 mt-12 mx-12 rounded-md ring-4 w-12 text-center">2</div>
                <div className="border-8 border-yellow-500 mt-12 mx-12 rounded-md w-12 text-center">3</div>
            </div>
            <br />

            {/* divideを挿入する際、親要素でdivide-xを指定、真ん中に線を持ってくるには小要素にflex-growを持たせる　 */}
            <div className="flex mt-16 justify-around divide-x divide-green-300">
                <div className="flex-grow text-center">1</div>
                <div className="flex-grow text-center">2</div>
                <div className="flex-grow text-center">3</div>
            </div>
            <div className="mt-12 flex justify-around">
                <div className="bg-blue-500 w-24 h-8 pt-1 rounded-xl text-center text-white">Rounded</div>
                <div className="bg-blue-500 w-24 rounded-xl text-center text-white ring-4 ring-blue-800">Rounded</div>
                <div className="w-24 bg-yellow-400 rounded-full text-center py-9 text-white ring-4 ring-yellow-800 font-bold">Ring</div>
                <div className="w-24 bg-yellow-400 rounded-full text-center py-9 text-white ring-4 ring-pink-700 font-bold ring-offset-4 ring-offset-white-100">Ring</div>
            </div>
        </div>

    );
};
