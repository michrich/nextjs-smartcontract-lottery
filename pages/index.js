import Head from "next/head"
import styles from "../styles/Home.module.css"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"
import { useMoralis } from "react-moralis"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Lotto dApp</title>
            </Head>
            <Header />
            <LotteryEntrance />
        </div>
    )
}
