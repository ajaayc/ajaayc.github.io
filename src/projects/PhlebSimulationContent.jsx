import React from 'react';

export default function PhlebSimulationContent() {
return (
    <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-4 justify-center">
            <img src="img/phlebSimulationInputsScreenshot.png" alt="FAF image" className="w-full max-w-sm rounded" />
            <img src="img/phlebSimulationScreenshot.png" alt="FAF image" className="w-full max-w-sm rounded" />
        </div>

        <p>
            For approximately two years of my undergrad, I was a student research assistant at the <a href="https://cheps.engin.umich.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">University of Michigan-Center for Healthcare Engineering and Patient Safety (CHEPS)</a>, which is directed by my long-term mentor <a href="https://ioe.engin.umich.edu/people/cohn-amy-m/" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">Professor Amy Cohn</a>.
        </p>
        
        <p>
            At CHEPS, I primarily spearheaded the development of a <a href="https://en.wikipedia.org/wiki/Discrete-event_simulation" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">discrete event simulation</a> of the flow of patients through the phlebotomy clinic at the University of Michigan Health System's Comprehensive Cancer Center.
        </p>

        <p>
            Prior to receiving a chemotherapy infusion treatment at the Cancer Center, a patient arrives at the phlebotomy clinic for a blood draw. Long waiting times in the phlebotomy clinic can contribute to significant delays in patient/provider interactions at the Cancer Center's infusion clinic.
        </p>

        <p>
            I developed the simulator in C++ as a CLI-based tool, which would aid hospital management in instituting policy changes that would increase patient throughput at the phlebotomy clinic. Hospital management could manipulate input various inputs of the simulator, such as the start/end time of the day, patient arrival rates (configurable as either a uniform or Poisson process), phlebotomist schedules, and the velocity of patient check-in and blood draws. Subsequently, management could then observe metrics pertinent to patient wait-times and phlebotomist utilization.
        </p>
    </div>
);
}
