import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    const handleClick = (href) => {
        router.push(href);
    }

    return (
        <nav>
            <button onClick={() => {handleClick('/')}}>Home</button>
            <button onClick={() => {handleClick('/cafe')}}>Cafe</button>
            <button onClick={() => {handleClick('/club')}}>Club</button>
            <button onClick={() => {handleClick('/shop')}}>Shop</button>
        </nav>
    );
}