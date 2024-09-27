import Naavvbar from "./Navvbar"
import ImageSlider from "./slider"
import glass from "../image/glass.webp"
import blog1 from "../image/blog1.webp"
import ContactUs from "./contact"


const Climate=()=>{
    return(
        <>
<div>
<Naavvbar></Naavvbar>
    <ImageSlider></ImageSlider>
</div>
<div className="allflez">
=======
<div className="climatealign"> 

<div className="all">
    <div className="data">
        <div className="gapkam">

        <h1>WHAT IS CLIMATE CHANGE?
        </h1>
        </div>
        <p>Climate change means the Earth’s temperatures and weather are changing over a long time. Sometimes, this happens naturally, like from changes in the sun or big volcanic eruptions. But since the 1800s, humans have been the main cause. This is mostly because we burn fossil fuels like coal, oil, and gas.
        </p>
<p>When we burn these fuels, they release gases called greenhouse gases, which trap heat in the atmosphere, making the Earth warmer. The main gases causing climate change are carbon dioxide and methane. Carbon dioxide comes from things like driving cars or using coal to heat buildings. Cutting down trees also releases it. Methane comes from farming and oil and gas industries. Sectors like energy, transportation, buildings, and agriculture are the biggest sources of these gases.
</p>

<div className="secondquestion">
<h1>HUMAN ACTIONS ARE TO BLAME FOR GLOBAL WARMING:
</h1>

<p>Scientists have proven that humans are largely responsible for global warming over the past 200 years. Our activities, like burning fossil fuels and cutting down forests, are releasing greenhouse gases that are heating the Earth faster than at any time in the last 2,000 years.
</p>
</div>
</div>
<div className="imgg">

        <img src={blog1} alt="" />
</div>

    </div>
    <div className="all2">



    <div className="data2">

<img src="https://media.istockphoto.com/id/1656539588/vector/global-warming-and-climate-change-concept.jpg?s=612x612&w=0&k=20&c=2164U7sdUIpPijP0_ZvzzagyVyWG98276j7UgDnRDCo=" alt="" />
        <img src={glass} alt="" />
    </div>
    </div>

<div className="lamba">

<p>

Since the late 1800s, the Earth's surface temperature has risen by about 1.2°C, making it hotter than it has been in the last 100,000 years. The decade from 2011 to 2020 was the warmest ever recorded, and each of the last four decades has been hotter than the one before, going back to 1850.
</p>
<p>Many people think climate change only means hotter temperatures, but it’s much more than that. The Earth is a connected system, so changes in one area affect others. Climate change is causing severe droughts, water shortages, wildfires, rising sea levels, floods, melting polar ice, stronger storms, and a loss of biodiversity (the variety of life on Earth).

</p>
<h1>PEOPLE ARE ENCOUNTERING CLIMATE CHANGE IN DIFFERENT WAYS:
</h1>
<p>People are facing climate change in various ways. It can impact our health, food production, housing, safety, and jobs. Those already vulnerable, like people in small island nations and developing countries, are particularly at risk. Rising sea levels and saltwater intrusion have forced entire communities to move, and long-lasting droughts are threatening food supplies. In the future, more people are expected to be displaced by extreme weather events.
</p>
</div>
<div className="lamba2">

<h1>WE HAVE A BIG CHALLENGE AHEAD, BUT WE ALREADY KNOW MANY OF THE SOLUTIONS.:
</h1>
<p>Every increase in global warming matters. UN reports show that limiting the temperature rise to no more than 1.5°C could help us avoid the worst impacts and keep the climate livable. However, current policies suggest a 3°C rise by the end of the century.</p>
<p>Emissions causing climate change come from all over the world, but some countries emit much more than others. The seven biggest emitters—China, the USA, India, the European Union, Indonesia, Russia, and Brazil—were responsible for about half of global greenhouse gas emissions in 2020</p>
<p>Everyone needs to act on climate change, but those who contribute the most have a greater responsibility to lead.</p>
<p>Many solutions for climate change can bring economic advantages while improving our quality of life and protecting the environment. We have global frameworks to guide our efforts, including the Sustainable Development Goals, the UN Framework Convention on Climate Change, and the Paris Agreement. Actions can be grouped into three main areas: cutting emissions, adapting to climate impacts, and financing necessary changes.</p>
<p>We can invest in climate action now, or face much higher costs in the future. Addressing climate change needs substantial financial investments from governments and businesses. However, not taking action will be far more costly. A key step is for developed countries to honor their promise to provide $100 billion annually to help developing nations adapt and transition to greener economies.</p>
</div>
</div>
</div>

<ContactUs></ContactUs>
        </>
    )
}
export default Climate;