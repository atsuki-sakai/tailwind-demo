export default function WidthHeight(params) {
    return (
        <div>
            &lt; !--インライン要素には w - 4 が効いていない。　インライン要素は幅、高さを制限されない。 --&gt;
            <span className="border border-red-500 w-12">インライン要素</span>
            <div className="border border-red-500 w-12">ブロック要素</div>
            {/*可変 */}
            <div className=" border border-blue-500 w-1/2 mt-12">ブロック要素</div>
            {/*固定 */}
            <div className=" border border-blue-500 w-80 mt-12">ブロック要素</div>
            {/*最大 */}
            <div className=" border border-blue-500 w-full mt-12">ブロック要素</div>
            {/*最大値指定 */}
            <div className="border border-blue-500 max-w-2xl mt-12 mx-12">最大値指定</div>
            {/*最小値指定 */}
            <div className="border border-blue-500 min-w-8xl mt-12 mx-12">最大値指定</div>
            <div className="flex mt-4">
                <div className="w-1/2 border border-blue-500 ">左側</div>
                <div className="w-1/2 border border-blue-500 ">右側</div>
            </div>
        </div>
    )
};
