import axios from 'axios'
import React, { useState } from 'react'
import Config from "react-native-config"

export const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [list, setList] = useState([])
    const [query, setQuery] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [imageDetail, setImageDetail] = useState({})

    const getImages = () => {
        axios.get(`https://pixabay.com/api/?key=${Config.API_KEY}&page=${currentPage}&q=${query.replace(/\s/g, '+')}&image_type=photo`)
            .then(res => {
                setList([...list, ...res?.data?.hits])
            })
    }

    const payload = {
        list,
        query,
        setList,
        setQuery,
        getImages,
        isLoading,
        imageDetail,
        currentPage,
        setIsLoading,
        setCurrentPage,
        setImageDetail
    }

    return (
        <AppContext.Provider value={payload}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider