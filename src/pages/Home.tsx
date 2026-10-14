
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <h1>Welcome to my React Project</h1>
        <p>A clean and scalable project structure.</p>
        <Button label="Get Started" />
      </main>

      <Footer />
    </>
  );
}
