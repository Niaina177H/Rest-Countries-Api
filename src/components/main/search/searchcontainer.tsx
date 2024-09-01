import { useMemo, useState } from "react";
import FilterDropDown from "./filter";
import SearchInteractive from "./search";

function SearchContainer({search, setter, theme}: {search: any, setter: any, theme: any}){
    const [filtre, setFiltre] = useState('');
    const [cherche, setCherche] = useState('');
    return <div id="main-header">
    <SearchInteractive nameforsearch={search} setterData={setter} theme={'items-'+theme} filtrage={filtre} changesearch={setCherche} />
    <FilterDropDown nameforfilter={search} setterFilter={setter} theme={'items-'+theme} changefiltre={setFiltre} filtrage={cherche} />
</div>
}

export default SearchContainer