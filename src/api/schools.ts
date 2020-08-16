import useSWR, {useSWRInfinite} from "swr";
import fetchData from "./fetchData";
import {serializeSearchData} from "../utils/search";
import {useEffect} from "react";
import {getTotalPages, PER_PAGE} from "../utils/pagination";

export const fetchSchools = (path: string): Promise<{count: number, schools: any[]}> => {
    return fetchData(path)
        .then(res => ({
            count: res.count,
            schools: res.results
        }))
};

export const useSchools = (searchData: any) => {
    const params = serializeSearchData(searchData, 'api');
    return useSWR(`/school/?${params}`, fetchSchools);
}

export const useAllSchools = (searchData: any) => {

    const getKey = (pageIndex: number, prevRes: any) => {
        if(prevRes && !prevRes.next) return null;

        const params = serializeSearchData({
            ...searchData,
            page: pageIndex+1
        }, 'api');
        return `/school/?${params}`;
    }

    const { data, size, setSize, error } = useSWRInfinite(getKey, fetchData);

    useEffect(() => {
        if(data && size && size === 1 && data[0].count > PER_PAGE && setSize) {
            setSize(getTotalPages((data[0].count)));
        }
    }, [data, size, setSize, searchData]);



    return {
        data: data && size && (size > 1 || data[0].count <= PER_PAGE) ? data.map(res => res.results).flat() : [],
        error
    }
}