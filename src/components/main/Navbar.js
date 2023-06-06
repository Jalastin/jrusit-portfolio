import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    const handleClick = (href) => {
        router.push(href);
    }

    return (
        <div>
            <button onClick={() => {handleClick('/')}}>Home</button>
            <button onClick={() => {handleClick('/shop')}}>Shop</button>
        </div>
    );
}