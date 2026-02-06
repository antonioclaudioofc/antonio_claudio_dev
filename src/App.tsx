import { Navbar } from "./components/Navbar";
import { About } from "./components/About";

export default function App() {
  return (
    <main className="w-full">
      <Navbar />
      <section id="about">
        <About />
      </section>
    </main>
  );
}
