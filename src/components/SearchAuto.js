import React, {useEffect, useState} from 'react';
import {debounce, throttle} from "throttle-debounce";
import {API_KEY, getData} from "./Main";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {addSearch, setPage} from "../actions";
import TextField from "@material-ui/core/TextField";
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from "react-router-dom";

const DEBOUNCE_DUR = 200
const THROTTLE_DUR = 300

const SearchAuto = props => {
    const searches = useSelector(state => state.searches);
    const [data, setData] = useState({
            search: "",
            data: searches,
            text: '',
        });

        const dispatch = useDispatch();
        const autocompleteSearchDebounced = func => {

            debounce(DEBOUNCE_DUR, func())
        };

        const autocompleteSearchThrottled = (func) => {
            throttle(THROTTLE_DUR, func())
        };


        const loadURL = () => {
            const url = "locations/v1/cities/autocomplete?apikey=" + API_KEY + "&q=" + data.search;
            getData(encodeURI(url)).then(res => {
                setData({...data, data: res});
            });
        };
        const autocompleteSearch = q => {
            const _searches = data._searches || [];
            _searches.push(q);
            setData({...data, _searches});
            loadURL();
        };
        const changeQuery = event => {
            if (event.target.innerHTML) {
                setData({...data, data: event.target.innerHTML});
            } else {
                setData({...data, search: event.target.value});
            }
        };

        useEffect(() => {
            if (data.search !== "") {
                const q = data.search||"";
                if (q.length < 5) {
                    autocompleteSearchThrottled(autocompleteSearch);
                } else {
                    autocompleteSearchDebounced(autocompleteSearch);
                }
            }
            console.log(data)
            // eslint-disable-next-line react-hooks/exhaustive-deps,
        }, [data.search]);


        return (
            <div className={'searchContainer'}>
                <Autocomplete
                    id="combo-box-demo"
                    freeSolo
                    style={{
                        flex: 1,
                        margin: 0,
                        color: 'white',
                    }}
                    options={(data.search===undefined||data.search==="")?searches:(Array.isArray(data.data) ? data.data : [])}
                    getOptionLabel={(option) => option.LocalizedName}
                    onChange={(e, newInputValue) => {
                        if (newInputValue) {
                            dispatch(addSearch(newInputValue))
                            dispatch(setPage(newInputValue))
                        }
                        let url = window.location.href;
                        if ((url.substr(url.lastIndexOf('/') + 1)) === "favourite")
                            props.history.push("/")
                    }
                    }
                    disableClearable
                    onInputChange={e => changeQuery(e)}
                    renderInput={params => (
                        <TextField {...params} style={{width: '100%', color: "white"}}
                                   label="Search" margin="normal" variant="outlined"
                        />)}/>
            </div>
        );
    }
;

export default withRouter(SearchAuto);