import Image from 'next/image';
import Link from 'next/link';

export default function Logo(params) {
    return (
        <Link href="/" className="flex flex-col items-center py-2">
            <Image
                src="/logo.png"
                alt="Face2"
                width={70}
                height={70}
                className=""
            />
            <h1 className="text-3xl font-bold text-primary tracking-widest">Face2</h1>
        </Link>
    )
};
