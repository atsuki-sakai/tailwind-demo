export default function MarginPadding(params) {
    return (
        <div>
            &lt; !--m = margin: 枠外の余白, mt -, mb -, ml -, mr -, mx - (両サイド), my - (上下)-- &gt;
            <p className="border border-blue-500 mb-16">p = パラグラフ文章のひとまとまり</p>
            <p className="border border-blue-500 mt-8 p-8">p = パラグラフ文章のひとまとまり</p>
            <p className="border border-blue-500 mx-16">p = パラグラフ文章のひとまとまり</p>
            <p className="border border-red-500 my-16">
                親ブロック
                <span className="border border-yellow-500 m-8">子ブロック</span>
                <span className="border border-yellow-500 p-12">子ブロック</span>
            </p>
            {/*p = padding: 枠内の余白, pt -, pb -, pl -, pr -, px - (両サイド), py - (上下)-- > */}
            <div className="border border-pink-500 mt-20 flex justify-around">
                親ブロック
                <div className="border border-purple-500">子ブロック</div>
                <div className="border border-purple-500 m-12">子ブロック</div>
            </div>

        </div>

    )
};
