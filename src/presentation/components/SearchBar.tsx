import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

type SearchBarProps = {
    handleSearch: (newSearch: string) => void
}

const SearchBar = ({handleSearch} : SearchBarProps) => {
    const [searchText, setSearchText] = useState('');
  return (
    <View className='bg-white h-12 flex-1 rounded-xl mb-2'>
        <TextInput
            placeholder="Search by title, description, company"
            value={searchText}
            onChangeText={setSearchText}
            returnKeyType="search"   // shows "Search" on keyboard
            onSubmitEditing={() => {
                console.log(searchText)
                handleSearch(searchText)
            }}
            className='h-full w-full px-2'
        />
    </View>
  )
}

export default SearchBar