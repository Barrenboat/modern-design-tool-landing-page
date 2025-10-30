import Tag from "@/components/Tag";
import FeaturesCard from "@/components/FeaturesCard";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>features</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6">
                    Where power meets
                    <span className="block text-lime-400">simplicity</span>
                </h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                    <FeaturesCard
                        title="Real-time Collaboration"
                        description="Work together seamlessly with conflict-free team
                            editing"
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <Avatar
                                src={avatar1}
                                alt="Avatar 1"
                                className="z-40
                            "
                            />
                            <Avatar
                                src={avatar2}
                                alt="Avatar 2"
                                className="-ml-6 border-indigo-500
                                z-30"
                            />
                            <Avatar
                                src={avatar3}
                                alt="Avatar 3"
                                className="-ml-6 border-amber-500
                                z-20"
                            />
                            <div className="-ml-4  size-16 bg-neutral-700 rounded-full flex items-center justify-center gap-1 relative">
                                <Avatar
                                    src={avatar4}
                                    alt="Avatar 4"
                                    className="absolute opacity-0 group-hover:opacity-100 transition duration-500 border-green-500"
                                />
                                {Array.from({ length: 3 }).map((_, index) => (
                                    <span
                                        className="size-1.5 rounded-full bg-white "
                                        key={index}
                                    ></span>
                                ))}
                            </div>
                        </div>
                    </FeaturesCard>
                    <FeaturesCard
                        title="Interactive Prototyping"
                        description="Work Engage your clients with prototypes that react to
                            user actions"
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center ">
                            <p className="text-4xl font-extrabold text-white/20 group-hover:text-white/10 text-center transition duration-500">
                                We&apos;ve achieved
                                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                                    <span>incredible</span>
                                    <video
                                        src="/assets/videos/gif-incredible.mp4"
                                        autoPlay
                                        loop
                                        playsInline
                                        className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500"
                                    />
                                </span>
                                growth this year
                            </p>
                        </div>
                    </FeaturesCard>
                    <FeaturesCard
                        title="Keyboard Quick Actions"
                        description=" Powerful commands to help you create designs more
                            quickly"
                        className="md:col-span-2 md:col-start-2 lg:col-span-1 lg group"
                    >
                        <div className="aspect-video flex items-center justify-center gap-4">
                            <Key className="w-28">shift</Key>
                            <Key className="delay-150">alt</Key>
                            <Key className="delay-300">C</Key>
                        </div>
                    </FeaturesCard>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 justify-center ">
                    {features.map((feature) => (
                        <div
                            key={feature}
                            className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center justify-center hover:scale-105 transition duration-500 will-change-transform group"
                        >
                            <span className="bg-lime-400 text-neutral-950  rounded-full size-5  inline-flex items-center justify-center text-xl group-hover:rotate-[60deg] transition duration-500 will-change-transform">
                                &#10038;
                            </span>
                            <span className="font-light md:font-normal md:text-lg">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
