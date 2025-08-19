import Image from "next/image";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/heroSection/HeroSection";
import Content from "./components/content/Content";
import Form from "./components/form/Form";
export default function Home() {
  return (
    <div className="bg-black">
      <NavBar />
      <HeroSection/>
      <Content />
      <Form />
    </div>
  );
}
