import Banner from "../components/banner/Banner";
import CountOfMembers from "../components/CountOfMembers";
import FrequentlyQuestions from "../components/FrequentlyQuestions";

const HomePage = () => {
    return (
        <>
            <div className="h-full bg-zinc-950">
                <div>
                    <Banner />
                </div>
                <div className="w-full flex justify-between px-10">
                    <div className="w-2/5"><CountOfMembers /></div>
                    <div className="w-3/5"><FrequentlyQuestions /></div>
                </div>
            </div>
        </>
    );
}

export default HomePage;