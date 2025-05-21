import React from 'react';
import c1 from '../assets/image-removebg-preview (43).png';
import c2 from '../assets/image-removebg-preview (44).png';
import c3 from '../assets/image-removebg-preview (42).png';
import c4 from '../assets/image-removebg-preview (41).png';

const CompaniesWeWorkWith: React.FC = () => {
    const companies = [
        { name: 'Bechtel', logo: c1 },
        { name: 'Fluor Corporation', logo: c2 },
        { name: 'Skanska', logo: c2 },
        { name: 'Turner Construction', logo: c3 },
        { name: 'Kiewit', logo: c2 },
        { name: 'Jacobs Engineering', logo: c4 },
        { name: 'Balfour Beatty', logo: c1 },
        { name: 'Tetra Tech', logo: c2 },
        { name: 'HDR', logo: c3 },
        { name: 'Mortenson', logo: c4 },
        { name: 'PCL Construction', logo: c1 },
        { name: 'Clark Construction', logo: c2 },
        { name: 'Whiting-Turner', logo: c3 },
        { name: 'Black & Veatch', logo: c4 },
        { name: 'Barton Malow', logo: c1 },
        { name: 'Hensel Phelps', logo: c2 },
    ];

    return (
        <div className="container mx-auto p-4 mt-19">
            <h1 className="text-5xl font-bold text-center mb-6">Our Trusted Partners</h1>
            <div className="flex flex-wrap justify-center">
                {companies.map((company, index) => (
                    <div key={company.name} className="flex justify-center items-center w-full md:w-1/3 lg:w-1/4 p-4">
                        <div 
                            className={`bg-white rounded-lg shadow-xl p-4 transition-transform transform ${index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right'} w-full`}
                        >
                            <img src={company.logo} alt={company.name} className="h-32 w-auto mx-auto" />
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes slide-left {
                    0% {
                        transform: translateX(-100%);
                        opacity: 0;
                    }
                    100% {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                @keyframes slide-right {
                    0% {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    100% {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                .animate-slide-left {
                    animation: slide-left 0.5s ease forwards;
                }

                .animate-slide-right {
                    animation: slide-right 0.5s ease forwards;
                }
            `}</style>
        </div>
    );
};

export default CompaniesWeWorkWith;