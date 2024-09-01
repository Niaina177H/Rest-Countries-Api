import { useState } from "react";

function FilterDropDown({setterFilter, nameforfilter, theme, changefiltre, filtrage}: {setterFilter: any, nameforfilter: any, theme: any, changefiltre: any, filtrage: any}){
    const [show, setShow] = useState(false)
    let classe = theme.includes("darker") ? 'color-darker' : '';
    return <div className={"overflow-visible relative shadow-md rounded text-sm "+theme} id="search-filter">
        <button className="h-full w-full text-left flex items-center "
            onClick={
                ()=>{
                    setShow(!show);
                }
            }
        >
            Filter by Region 
            <i className="mx-3" id="icon-down">
                <img src="/icon-down.png" alt="down" className={"w-[20px] h-[20px] " + classe}/>
            </i>
        </button>
        <ItemDropped show={show} setter={setterFilter} filter={nameforfilter} theme={theme} changefiltre={changefiltre} filtrage={filtrage}/>
    </div>
}
export default FilterDropDown;

const regionlist: string = 'Africa, Americas, Asia, Europe, Oceania, Aucun';
function ItemDropped({show, setter, filter, theme, changefiltre, filtrage}: {show: boolean, setter: any, filter: any, theme: any, changefiltre: any, filtrage: any}){
    let classe: string = ''
    if (show){
        classe = "ulshowdropdownclasse"
    }
    else{
        classe = 'ulhidedropdownclasse'
    }
    return <ul className={`mt-1 rounded-sm shadow-md ${classe} ${theme}`} id="list-card-items">
        {
            regionlist.split(', ').map((item: string, index: number)=>{
                return <li key={index} className="py-2 hover:underline underline-offset-2"
                        onClick={(e: any)=>{
                                toggleBg(e);
                                changefiltre(item);
                                let newdata = filter.filter((items:any)=>{
                                    return items.name.includes(filtrage)
                                })
                                setter(newdata.filter((items: any)=>{
                                    if (item === 'Aucun'){
                                        return items.region.includes('')
                                    }
                                    return items.region===item
                                }));
                            }
                        }
                    >
                    {item}
                </li>
            })
        }
    </ul>
}
function toggleBg(event: any){
    if (event.target.parentElement.querySelector(".underline")){
        event.target.parentElement.querySelector('.underline').classList.remove('underline')
    }
    event.target.classList.add("underline")
}