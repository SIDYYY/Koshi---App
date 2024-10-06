import { View, Text } from 'react-native'
import React from 'react'
import SearchBar from '../../components/SearchBar'
import Container from '../../components/Container'
import Button from '../../components/Button'
import icons from '../../constants/icons'



const Search = () => {
  return (
    <Container centerContent={true}>
      <View className="space-y-14 my-auto">
        <View className="items-center space-y-2">
          <Text className="text-3xl font-black">Looking for a car?</Text>
          <Text className="max-w-[300px] text-center text-[#9b9b9b] text-base">
            Find it quickly with our easy-to-use search tool.
          </Text>
        </View>
        <View className="">
          <SearchBar otherStyles="mb-6" searchIcon={false} />
          <Button label="Find Cars Now" icon={icons.search} iconTint="#ffffff" />
        </View>
      </View>
    </Container>
  );
}

export default Search