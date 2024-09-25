import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import CardContainer from "./card/cardcontainer";
import SearchContainer from "./search/searchcontainer";
import { FormatPopulation } from "./card/card";
import Details from "./detail/details";
import Link from "next/link";

function MainSection({theme}: {theme: any}){
    const [tempdata, setData] = useState([]);
    const [detail, setDetail] = useState('');
    const refmain: any = useRef(null);
    const [data, setDatas] = useState([]);
    const fetchdata = useCallback(async (setter: any)=>{
        const data: any = await fetch("https://restcountries.com/v3.1/all");
        const res: any = await data.json();
        let datamin: any = res;
        datamin = datamin.map((item: any)=>{
            return {name: item.name.common, 
                population: FormatPopulation(item.population), 
                region: item.region, 
                capital: item.capital ? item.capital : '', 
                flag: item.flags.svg, 
                nativeName: item.name.official,
                subRegion: item.subregion ? item.subregion : '', 
                borders: item.borders ? item.borders : '', 
                currencies: item.currencies ? item.currencies : '', 
                languages: item.languages ? item.languages : '', 
                topLevelDomain: item.tld ? item.tld[0] : '', 
                alpha3Code: item.cca3
            }
        });
        setter(datamin);
        setDatas(datamin);
    },[]);
    useEffect(()=>{
        fetchdata(setData);
    }, [])
    let classe = theme.includes("darker") ? 'color-darker' : '';
    return <div id="main-content" ref={refmain}>
        <SearchContainer search={data} setter={setData} theme={theme}/>
        <CardContainer data={tempdata} theme={theme} setter={setDetail}/>
        {
                detail && <Details objet={detail} reset={setDetail} theme={theme} data={data}/>
        }
        <Link href="#search-interactive"><i><img src="/icon-up.png" alt="up" className={classe}/></i></Link>
    </div>
}
export default MainSection;
