import React, { Dispatch, SetStateAction } from "react";

import { Input } from "./styles";

type SearchInputProps = {
    placeholder: string
    search: string;
    updateSearch: Dispatch<SetStateAction<any>>
}

export default function SearchInput({
    placeholder,
    search,
    updateSearch
}: SearchInputProps) {
    return (
        <Input
            placeholder={placeholder}
            value={search}
            onChange={updateSearch}
        />
    )
}