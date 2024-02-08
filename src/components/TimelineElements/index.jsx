import { AiFillRead } from "react-icons/ai";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "./style.css"
import "./timelineElements.js"
import { timelineElements } from "./timelineElements.js";

//não consegui aplicar do jeito que pensei, reajustar!

const Timeline = () => {

    return (
        <>
            <VerticalTimeline>
                {
                    timelineElements.map(elemento => {

                        return (
                            <>
                                <VerticalTimelineElement
                                    key={elemento.id}
                                    date={elemento.data}
                                    ClassName="cardExperiencia"
                                    icon={<AiFillRead />}
                                >
                                    
                                    <h3 className="verticalTimelineTit">
                                        {elemento.titulo}
                                    </h3>
                                    <h4 className="verticalTimelineSubTit">{elemento.local}
                                    </h4>
                                    <p id="descricao">
                                        {elemento.descricao}
                                    </p>
                                </VerticalTimelineElement>
                            </>

                        )
                    })
                }
            </VerticalTimeline>
        </>
    )
}

export default Timeline; 