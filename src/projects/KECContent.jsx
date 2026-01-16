import React from 'react';

export default function KECContent() {
return (
    <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-4 justify-center">
            <img src="img/fafimage.jpg" alt="FAF image" className="w-full max-w-sm rounded" />
        </div>

        <p>
                As an undergraduate student at the University of Michigan, I worked on a multidisciplinary student team in collaboration with the Kellogg Eye Center (KEC) to build a web application to facilitate the collection of instances of genetic retinal dystrophy data. Genetic retinal dystrophies are rare amongst the population and specialized eye hospitals throughout the world have isolated collections of patient data. The web application enabled two primary functionalities:
        </p>

        <ul className="list-disc pl-5">
            <li>Collection and consolidation by partner eye hospitals of: 1) Retinal fundus autofluorescence (FAF) images from patients exhibiting confirmed genetic retinal dystrophies, 2) Patient pedigree data.</li>
            <li>A machine learning model (<a href="https://en.wikipedia.org/wiki/Support_vector_machine" className="text-blue-600 font-semibold hover:underline" target="_blank" rel="noopener noreferrer">support vector machine</a>) trained on collected patient data, which would assist ophthalmologists in predicting the likely gene contributing to a new patient's confirmed genetic retinal dystrophy.</li>
        </ul>

        <p>
            Ophthalmologists from hospitals worldwide--in collaboration with KEC--would contribute patient data to this web application and utilize the built-in machine learning model to assist in diagnosing the root genetic basis of a new patient with a confirmed genetic retinal dystrophy.
        </p>

        <p>
                I primarily contributed to the web application's backend and frontend development, utilizing Python-Flask for the backend and a PostgreSQL database for storage of patient data.
        </p>
    </div>
);
}
