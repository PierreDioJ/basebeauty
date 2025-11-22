import HeroRelease from "./HeroRelease";
import HeroWorks from "./HeroWorks";

export default function Hero() {
    return (
        <section className="py-10 flex flex-row gap-5">
            <HeroRelease />
            <HeroWorks />
        </section>
    );
}