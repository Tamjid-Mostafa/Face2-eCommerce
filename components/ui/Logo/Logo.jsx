import Image from 'next/image';
import Link from 'next/link';

export default function Logo(params) {
    return (
        <Link href="/" className="flex flex-col items-center py-2">
            <Image
                src="/logo.png"
                alt="Face2"
                width={100}
                height={100}
                className=""
                priority
            />
            <h1 className="text-3xl font-bold text-primary tracking-widest">Face2</h1>
        </Link>
    )
};
