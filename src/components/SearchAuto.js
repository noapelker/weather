import React, {useEffect, useState} from 'react';
import {debounce, throttle} from "throttle-debounce";
import {API_KEY, getData} from "./Main";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {setPage} from "../actions";
import TextField from "@material-ui/core/TextField";
import {useDispatch} from "react-redux";
import {withRouter} from "react-router-dom";

const SearchAuto = props => {
        const [state, setState] = useState({
            search: "",
            data: [],
            text: '',
        });

        const dispatch = useDispatch();
        const autocompleteSearchDebounced = (func) => {

            debounce(200, func())
        };

        const autocompleteSearchThrottled = (func) => {
            throttle(300, func())
        };


        const loadURL = () => {
            getData("locations/v1/cities/autocomplete?apikey=" + API_KEY + "&q=" + state.search.replace(/ /g, '%20')).then(res => {
                setState({...state, data: res});
            });
        };
        const autocompleteSearch = q => {
            _fetch(q);
        };
        const changeQuery = event => {
            if (event.target.innerHTML) {
                setState({...state, data: event.target.innerHTML});
            } else {
                setState({...state, search: event.target.value});
            }
        };

        useEffect(() => {
            if (state.search !== "") {
                const q = state.search;
                if (q.length < 5) {
                    autocompleteSearchThrottled(autocompleteSearch);
                } else {
                    autocompleteSearchDebounced(autocompleteSearch);
                }
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps,
        }, [state.search]);
        const _fetch = q => {
            const _searches = state._searches || [];
            _searches.push(q);
            setState({...state, _searches});
            loadURL();

        };


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
                    options={Array.isArray(state.data) ? (state.data.map(option => option)) : []}
                    getOptionLabel={(option) => option.LocalizedName}
                    onChange={(e, newInputValue) => {
                        if (newInputValue)
                            dispatch(setPage(newInputValue))
                        let url=window.location.href;
                        if((url.substr(url.lastIndexOf('/') + 1))==="favourite")
                            props.history.push("/")
                    }
                    }
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