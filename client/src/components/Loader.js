import React, {useMemo} from "react";
import cn from "classnames";

const Loader = ({isLoading}) => {
    const className = useMemo(() => {
        return cn("loader", {"loader--active": isLoading});
    }, [isLoading])

    return (
        <div className={className}/>
    );
}

export default Loader;