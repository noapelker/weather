import React, {useEffect, useState} from 'react';
import {debounce, throttle} from "throttle-debounce";
import {API_KEY, getData} from "../Utils";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {addSearch, setPage} from "../actions";
import TextField from "@material-ui/core/TextField";
import {useDispatch, useSelector} from "react-redux";
import {withRouter} from "react-router-dom";
import {useToasts} from "react-toast-notifications";
import {errors} from "../TextBlocks";

const DEBOUNCE_DUR = 600
const THROTTLE_DUR = 500
const getAutoSearch = (query, callback,errnCallBack) => {
    const url = "locations/v1/cities/autocomplete?apikey=" + API_KEY + "&q=" + query;
    getData(encodeURI(url)).then(res => {
        callback(data => ({...data, data: res}));
    }).catch(_ => {
        console.log()
        errnCallBack(errors.failFetch,{appearance:"error"})
    });
};
const throttleFunc = throttle(THROTTLE_DUR, getAutoSearch)
const debounceFunc = debounce(DEBOUNCE_DUR, getAutoSearch)

const SearchAuto = props => {
        const searches = useSelector(state => state.searches);
        const darkTheme = useSelector(state => state.themeMode);
        const [data, setData] = useState({
            search: "",
            data: searches,
            text: '',
        });
        const dispatch = useDispatch();
        const {addToast} = useToasts();
        const changeQuery = event => {
            if (event.target.innerHTML) {
                setData({...data, data: event.target.innerHTML});
            } else {
                setData({...data, search: event.target.value});
            }
        };

        useEffect(() => {
            //Fetch according to search changes
            if (data.search !== "") {
                const q = data.search || "";
                if (q.length < 5)
                    throttleFunc(q, setData,addToast);
                else
                    debounceFunc(q, setData,addToast);
            }
        }, [data.search,addToast]);


        return (
            <div className={'searchContainer'} style={{color: "black"}}>

                <Autocomplete
                    freeSolo
                    style={{
                        flex: 1,
                        margin: 0,
                    }}
                    classes={{
                        inputRoot: darkTheme ? "blackSearch" : "lightSearch",
                        listbox: (data.search === undefined || data.search === "") ? "searches" : ""
                    }}
                    options={(data.search === undefined || data.search === "") ? searches : (Array.isArray(data.data) ? data.data : [])}
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
                        <TextField {...params} className={"menuBlack"} style={{width: '100%'}}
                                   label="Search" margin="normal" variant="outlined"
                        />)}/>
            </div>
        );
    }
;

export default withRouter(SearchAuto);