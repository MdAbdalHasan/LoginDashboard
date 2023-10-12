import NavBar from "./compunents/navbar";
import TextBox from "./compunents/textBox";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 ml-20 mr-20 mt-5">
      <NavBar />
      <TextBox />
    </main>
  )
}
