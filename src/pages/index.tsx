import Head from "next/head";
import Image from "next/image";
import SitReadingDoodle from "../../public/SitReadingDoodle.svg";
import book from "../../public/book.png";
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter();
  function handleUsers(e: any){
    e.preventDefault();
    router.push('/showUsers')
  }
  return (
    <div className="Wrapper">
      <Head>
        <title>Escola Mais TODO</title>
      </Head>
      <div className="TitleContainer">
        <Image src={book} alt="book logo" width={100} height={40} />
        <h1 className="HomePageTitle">Escola Mais TO DO</h1>
      </div>
      <span className="ShortDescription">
        Qui animated corpse, cricket bat max brucks terribilem incessu zomby.
      </span>
      <div className="DescriptionHomePage">
        <div className="ParagraphContainer">
          <p>
            Zombie ipsum reversus ab viral inferno, nam rick grimes malum
            cerebro. De carne lumbering animata corpora quaeritis. Summus brains
            sit​​, morbo vel maleficia? De apocalypsi gorger omero undead
            survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo
            evil stalking monstra adventus resi dentevil vultus comedat
            cerebella viventium.
          </p>
        </div>
        <Image
          src={SitReadingDoodle}
          alt="Picture of the author"
          width={400}
          height={400}
        />
      </div>
      <div className="GetStartedButton">
        <button className="style-4" onClick={handleUsers}>Get started</button>
      </div>
    </div>
  );
}
