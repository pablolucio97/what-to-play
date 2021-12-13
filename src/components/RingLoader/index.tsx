import React from 'react';
import RingLoader from 'react-spinners/RingLoader'

type RingLoaderProps = {
    isLoading: boolean
}

export default function RingLoaderComponent({ isLoading }: RingLoaderProps) {
    return (
        <RingLoader
            color='#2391ff'
            loading={isLoading}
            size={48}
        />
    )
}