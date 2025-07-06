import { useEffect, useState } from "react";
import "./poll.css"


const root = document.documentElement;
root.style.setProperty("--sjs-primary-backcolor", "#000000");
root.style.setProperty("--sjs-primary-forecolor", "#00ff00");
root.style.setProperty("--sjs-font-family", "Inter, sans-serif");


const dummyResults = {
    Spring: 21,
    Summer: 29,
    Fall: 15,
    Winter: 9,
};

const getVoteHeight = (votes, total) => {
    if (total === 0) return 0;
    const percent = (votes / total) * 100;
    const scaled = Math.round(percent * 5); // use *2 or *4 for taller bars
    return scaled < 10 ? 10 : scaled;
};
console.log(17 + 35 + 15 + 9)

const totalVotes = Object.values(dummyResults).reduce((a, b) => a + b, 0);
console.log("total:", totalVotes)

const newResults = {
    Spring: getVoteHeight(dummyResults.Spring, totalVotes),
    Summer: getVoteHeight(dummyResults.Summer, totalVotes),
    Fall: getVoteHeight(dummyResults.Fall, totalVotes),
    Winter: getVoteHeight(dummyResults.Winter, totalVotes)
}

export default function Poll() {
    const [flipped, setFlipped] = useState(false);
    const [selected, setSelected] = useState(null)
    const [error ,setError] = useState(null)
    const [results, setResults] = useState(newResults);
    const [animatedResults, setAnimatedResults] = useState({
        Spring: 0,
        Summer: 0,
        Fall: 0,
        Winter: 0,
    });
    const animatedTotal = Object.values(animatedResults).reduce((a, b) => a + b, 0);

    useEffect(() => {
        if (!flipped) return;

        const flipDuration = 800; // Match your card's CSS flip duration
        const duration = 1000;    // Total animation time
        const steps = 20;
        const intervalTime = duration / steps;

        const delayBeforeStart = setTimeout(() => {
            const increments = Object.keys(results).reduce((acc, season) => {
                acc[season] = results[season] / steps;
                return acc;
            }, {});

            let current = { ...animatedResults };
            let step = 0;

            const interval = setInterval(() => {
                step++;
                const updated = {};
                for (const season in results) {
                    updated[season] = Math.min(
                        Math.round(current[season] + increments[season]),
                        results[season]
                    );
                }
                current = updated;
                setAnimatedResults(updated);

                if (step >= steps) clearInterval(interval);
            }, intervalTime);
        }, flipDuration); // delay bar animation until after card finishes flipping

        return () => clearTimeout(delayBeforeStart); // clear the timeout on unmount
    }, [flipped]);



    function submitHandler(e) {
        e.preventDefault();
        console.log(e.target)
        
        if (selected) {
            setError(null)
            setFlipped(true)
        }
        else {
        setError("(Please select a season)")
        }
    }

    return (
        <div className="card-container relative overflow-hidden">
            <div className={`card ${flipped ? "flipped" : ""}`}>
                <div className="face frontside">
                    <form onSubmit={(e) => { submitHandler(e) }} className="poll-form rounded-lg">
                        <h2 className="text-lg font-bold mb-2">Which season is your favorite?</h2>
                        <div className="flex flex-col w-[100px] gap-[10px] items-start">
                            <div className="flex gap-[10px]">
                                <input type="radio" name="seasons" id="seasons" value="spring" onChange={(e)=>{setSelected(e.target.value)}} className="accent-yellow-200" />
                                <label>Spring</label>
                            </div>
                            <div className="flex gap-[10px]">
                                <input type="radio" name="seasons" id="seasons" value="summer" onChange={(e)=>{setSelected(e.target.value)}} className="accent-green-500" />
                                <label>Summer</label>
                            </div>
                            <div className="flex gap-[10px]">
                                <input type="radio" name="seasons" id="seasons" value="fall" onChange={(e)=>{setSelected(e.target.value)}} className="accent-orange-300" />
                                <label>Fall</label>
                            </div>
                            <div className="flex gap-[10px]">
                                <input type="radio" name="seasons" id="seasons" value="winter" onChange={(e)=>{setSelected(e.target.value)}} className="accent-cyan-300" />
                                <label>Winter</label>
                            </div>
                        </div>
                        {error&&
                        <div><p className="bg-purple-400/30 h-[25px]">{error}</p></div>
                        }
                        <input type="submit" value="Submit" className="text-black w-[100px] my-2 bg-cyan-400 hover:bg-cyan-300 border-2 border-cyan-100 rounded-md" />
                    </form>
                </div>
                <div className="face backside">
                    <div className="bg-black/35 flex flex-col justify-around items-center h-80 m-[20px] w-[366px] rounded-lg">
                    <h2 className="text-lg font-bold mb-2">Poll Results</h2>
                        <div className="flex flex-row justify-center items-end gap-6">
                            <div className="flex flex-col justify-center items-center">
                                <div className="poll bg-gradient-to-b from-[gold] to-[#f6ffca] w-8 transition-all duration-700 flex justify-center items-end" style={{ height: getVoteHeight(animatedResults.Spring, animatedTotal) }}><p>🌱</p></div>
                                <p className="font-bold pt-2">Spring</p>
                                <p className="text-sm"> {animatedResults.Spring > 0 ? animatedResults.Spring : ""}</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="poll bg-gradient-to-b from-[#15a815] to-[#d6ff95] w-8 transition-all duration-700 flex justify-center items-end" style={{ height: getVoteHeight(animatedResults.Summer, animatedTotal) }}><p>🌳​</p></div>
                                <p className="font-bold pt-2">Summer</p>
                                <p className="text-sm"> {animatedResults.Summer > 0 ? animatedResults.Summer : ""}</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="poll bg-gradient-to-b from-[orangered] to-[#ffd993] w-8 transition-all duration-700 flex justify-center items-end" style={{ height: getVoteHeight(animatedResults.Fall, animatedTotal) }}><p>🍁</p></div>
                                <p className="font-bold pt-2">Fall</p>
                                <p className="text-sm">{animatedResults.Fall > 0 ? animatedResults.Fall : ""}</p>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="poll bg-gradient-to-b from-[cyan] to-[white] w-8 transition-all duration-700 flex justify-center items-end" style={{ height: getVoteHeight(animatedResults.Winter, animatedTotal) }}><p>❄️​</p></div>
                                <p className="font-bold pt-2">Winter</p>
                                <p className="text-sm"> {animatedResults.Winter > 0 ? animatedResults.Winter : ""}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

