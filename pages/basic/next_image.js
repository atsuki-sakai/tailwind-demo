import Image from "next/image";

export default function NextImage(params) {

    return (
        <div>
            <div className="h-64 w-96 relative">
                <Image
                    src={"/images/img1.jpg"}
                    alt="image"
                    layout="fill"// required
                    objectFit="cover"
                    className="rounded-full"
                />
            </div>
            <br />
            <div className="h-96 w-96 relative">
                <Image
                    src={"/images/img1.jpg"}
                    alt="image"
                    layout="fill"// required
                    objectFit="cover"
                    className="rounded-full"
                />
            </div>
        </div>

    )
};
