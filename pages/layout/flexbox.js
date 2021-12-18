import Image from "next/image";

export default function Flexbox(params) {
    return (
        <>
            <header className="flex justify-between mx-12 mt-4">
                <h1>Logo</h1>
                <nav>
                    <ul className="md:flex Justify-end md:space-x-4">
                        <li>Home</li>
                        <li>About</li>
                        <li>Info</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
            <br />
            <section className="mt-16">
                <h2 className="text-center mb-8 text-xl"> 横並び sample</h2>
                <div className="flex justify-center space-x-16 mx-4">
                    <div className="w-1/4 border text-center border-yellow-500 py-4">
                        <div className="flex justify-center items-center space-x-4">
                            <div className="w-6 h-6 relative justify-start">
                                <Image src={"/images/img1.jpg"} objectFit="cover" layout="fill" alt="image" className="rounded-full" />
                            </div>
                            <h3 className="text-xl">title</h3>
                        </div>
                        <p className="text-sm text-gray-400" >sample text sample text</p>
                    </div>
                    <div className="w-1/4 border text-center border-yellow-500 py-4">
                        <div className="flex justify-center items-center space-x-4">
                            <div className="w-6 h-6 relative justify-start">
                                <Image src={"/images/img1.jpg"} objectFit="cover" layout="fill" alt="image" className="rounded-full" />
                            </div>
                            <h3 className="text-xl">title</h3>
                        </div>
                        <p className="text-sm text-gray-400" >sample text sample text</p>
                    </div>
                    <div className="w-1/4 border text-center border-yellow-500 py-4">
                        <div className="flex justify-center items-center space-x-4">
                            <div className="w-6 h-6 relative justify-start">
                                <Image src={"/images/img1.jpg"} objectFit="cover" layout="fill" alt="image" className="rounded-full" />
                            </div>
                            <h3 className="text-xl">title</h3>
                        </div>
                        <p className="text-sm text-gray-400" >sample text sample text</p>
                    </div>
                </div>
            </section>
            <section className="mt-16 mx-12">
                <h2>text to exchange</h2>
                <div className="flex items-center">
                    <div className="w-1/2">insert text here</div>
                    <div className="relative w-1/2 h-80">
                        <Image src={"/images/img1.jpg"} objectFit="cover" layout="fill" alt="image" w="50%" h="320" />
                    </div>
                </div>
            </section>
            <section className="mx-12">
                <h2 className="">text to exchange</h2>
                <div className="flex flex-row-reverse items-center">
                    <div className="w-1/2">insert text here.sample text</div>
                    <div className="relative w-1/2 h-80">
                        <Image src={"/images/img1.jpg"} objectFit="cover" layout="fill" alt="image" w="50%" h="320" />
                    </div>
                </div>
            </section>
            <section className="mx-12">
                <h2>text to exchange</h2>
                <div className="flex items-center">
                    <div className="w-1/2">insert text here</div>
                    <div className="relative w-1/2 h-80">
                        <Image src={"/images/img1.jpg"} objectFit="cover" layout="fill" alt="image" w="50%" h="320" />
                    </div>
                </div>
            </section>
        </>
    )
};

