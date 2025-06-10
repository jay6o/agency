export default function HowItWorks() {
    return (
        <section className="py-10 bg-transparent sm:py-16 lg:py-24" id="process" data-aos="zoom-y-out" data-aos-offset="0" data-aos-anchor-placement="center-bottom" data-aos-duration="700">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Our Process</h2>
                </div>
                <div className="relative mt-12 lg:mt-20">
                    <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                        <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
                    </div>
                    <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-500 border-2 border-black rounded-full shadow">
                                <span className="text-xl font-semibold text-white"> 1 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Book a Meeting</h3>
                            <p className="mt-4 text-base text-gray-600">Fill out a request form and/or book your first meeting with us.</p>
                        </div>

                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-500 border-2 border-black rounded-full shadow">
                                <span className="text-xl font-semibold text-white"> 2 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Audit</h3>
                            <p className="mt-4 text-base text-gray-600">During our meeting we will learn more about each other and determine if we are the best choice for you.</p>
                        </div>

                        <div>
                            <div className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-500 border-2 border-black rounded-full shadow">
                                <span className="text-xl font-semibold text-white"> 3 </span>
                            </div>
                            <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Partnership</h3>
                            <p className="mt-4 text-base text-gray-600">Once we come to the conclusion that our services will help your business succeed, we will write your contract and bill you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

