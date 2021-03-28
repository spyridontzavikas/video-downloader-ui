
import React, {useState, useEffect} from 'react';

import * as constants from "./Constants";


function FetchedVideosTable(props) {
    const [videoData, setVideoData] = useState({});

    const fetchData = () => {
        fetch(constants.API_DOMAIN_NAME + "videos/" + props.endpointName + "/")
        .then(async response => {
            let data = (await response.json()).slice(0, props.rowCount);
            console.log("Endpoint " + props.endpointName)
            console.log(data)
            setVideoData(data);
        })
        .catch(error => {
            console.error('There was an error during the HTTP list-crawl-jobs request: ', error);
        });
    }


    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 20000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return <div className="VideoTableStyle">
        {props.tableGenerateFunc(videoData)}
    </div>
}

export default FetchedVideosTable;