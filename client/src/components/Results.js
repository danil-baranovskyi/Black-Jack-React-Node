import React, {useMemo} from "react";
import HideResults from "./HideResults.js";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {results} from "../store/game/selectors.js";
import Result from "./Result.js";

const Results = ({hideHistory, results}) => {
    const showResults = useMemo(() => {
        return results.map((el, i) => {
            console.log(el)
            return <Result key={i} winners={el.winners} players={el.players}/>;
        })
    }, [results, hideHistory]);
    return (
        <div>
            <div className="results-overlay"/>
            <div className="results-body">
                <HideResults hideHistory={hideHistory}/>
                {showResults}
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    results
})

export default connect(mapStateToProps)(Results);