
// WARNING! cannot overwrite `page` param

interface ApiParamsOverwrite {
    searchParam: string
    apiParam: string
}

export const apiParamsOverwrites: ApiParamsOverwrite[] = [
    {
        searchParam: 'query',
        apiParam: 'school_name'
    },
];

export const frontendOnlyParams: string[] = [
    'view'
];
