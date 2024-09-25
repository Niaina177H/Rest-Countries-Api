import Card from "./card";
import db from '@/data/data.json';

const dbs: any = db

function CardContainer({data, theme, setter}: {data: any, theme: any, setter: any}){
    const bgthis = "items-"+theme
    return <div id="main-container-card">
        {
            data.map((item: any)=>{
                return <Card 
                    infos={item}
                    theme={bgthis}
                    key={data.indexOf(item)}
                    setter={setter}
                />
            })
        }
    </div>
}
export default CardContainer;