import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  let name = "han";
  let link = "http://google.com";
  return (
    <div>
      <h4 className='title'>애플후레시</h4>
      <p className='title-sub'>by {name}</p>
      <p style={{fontSize:'30px'}}>야호</p>
      <a href={link}>링크</a>
    </div>
  );
}
