export default function Base(params) {
    return (
        <div>
            &lt; !--m - 4 = 1rem = 1文字分-- &gt;
            &lt; !--インライン要素 --&gt;
            <span className="border border-red-500 m-4 ">spanタグです</span>
            <span className="border border-color-black p-12 m-12">インライン要素</span>
            {/*ブロック要素 */}
            <p className="border border-blue-500 mt-16">p = パラグラフ文章のひとまとまり</p>
            <p className="border border-blue-500 m-8 p-8">p = パラグラフ文章のひとまとまり</p>
            <p className="border border-blue-500 mx-16">p = パラグラフ文章のひとまとまり</p>
            {/*ブロック要素の中にインライン要素 */}
            <p className="border border-red-500 mt-16">
                親ブロック
                <span className="border border-yellow-500 m-8">子ブロック</span>
                <span className="border border-yellow-500 p-12">子ブロック</span>
            </p>
            {/*ブロック要素の中にインライン要素 */}
            <div className="border border-pink-500 mt-20 flex justify-around">
                親ブロック
                <div className="border border-purple-500">子ブロック</div>
                <div className="border border-purple-500 m-12">子ブロック</div>
            </div>
        </div>

    )
};
