export interface QuickAction {
    title: string;
    description: string;
    gradient: string;
    href: string;
};

export const quickActions: QuickAction[] = [
    {
        title: "Narrate a Story",
        description:"Bring characters to life with expressive AI narration",
        gradient: "from-cyan-400 to-cyan-50",
        href: "/text-to-speech?text=In a village tucked between mist-covered mountains,there lived an old clockmaker whose clocks never told the right time - but they always told the truth. One rainy eventSettingsReducer, a stranger walked in and asked for a clock that could show him his future."
    },
    {
        title: "Record a Podcast Intro",
        description: "Hook your listeners from the very first second",
        gradient: "from-purple-400 to-purple-50",
        href: "/text-to-speech?text=Welcome%20back%20to%20another%20episode%20of%20The%20Deep%20Dive%2C%20the%20podcast%20where%20we%20explore%20the%20ideas%20shaping%20our%20world.%20I%27m%20your%20host%2C%20and%20today%20we%27re%20going%20somewhere%20unexpected.",
    },
    {
        title: "Write a Product Ad",
        description: "Turn your product into a compelling audio spot",
        gradient: "from-orange-400 to-orange-50",
        href: "/text-to-speech?text=Tired%20of%20feeling%20drained%20by%203pm%3F%20Introducing%20Zest%20%E2%80%94%20the%20all-natural%20energy%20drink%20crafted%20for%20people%20who%20get%20things%20done.%20No%20crash.%20No%20jitters.%20Just%20clean%2C%20lasting%20energy%20when%20you%20need%20it%20most.",
    },
    {
        title: "Deliver Breaking News",
        description: "Read headlines with the authority of a news anchor",
        gradient: "from-red-400 to-red-50",
        href: "/text-to-speech?text=Good%20evening.%20In%20a%20historic%20development%2C%20scientists%20have%20announced%20the%20first%20successful%20test%20of%20a%20room-temperature%20superconductor%2C%20a%20breakthrough%20decades%20in%20the%20making%20that%20could%20reshape%20the%20global%20energy%20grid.",
    },
    {
        title: "Create a Meditation",
        description: "Guide listeners to calm with a soothing voiceover",
        gradient: "from-green-400 to-green-50",
        href: "/text-to-speech?text=Close%20your%20eyes%20and%20take%20a%20slow%2C%20deep%20breath%20in.%20Hold%20it%20gently%20for%20a%20moment%2C%20then%20let%20it%20go.%20With%20each%20exhale%2C%20release%20whatever%20you%27re%20carrying.%20You%20are%20safe.%20You%20are%20present.%20You%20are%20enough.",
    },
    {
        title: "Teach a Concept",
        description: "Explain anything clearly, like a world-class lecturer",
        gradient: "from-yellow-400 to-yellow-50",
        href: "/text-to-speech?text=Imagine%20you%27re%20standing%20on%20a%20moving%20train.%20To%20you%2C%20everything%20inside%20looks%20still%20%E2%80%94%20but%20to%20someone%20watching%20from%20the%20platform%2C%20you%27re%20hurtling%20past%20at%20full%20speed.%20This%20simple%20idea%20is%20at%20the%20heart%20of%20Einstein%27s%20theory%20of%20relativity.",
    },
]