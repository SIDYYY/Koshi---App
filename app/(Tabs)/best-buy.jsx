import { View, Text } from 'react-native'
import React from 'react'
import Container from '../../components/Container'
import BackButtonHeader from '../../components/BackButtonHeader'
import SearchBar from '../../components/SearchBar'

const BestBuy = () => {
  return (
    <Container>
      <BackButtonHeader title="Search Results" otherStyles="mb-4" />
      <SearchBar />
    </Container>
  )
}

export default BestBuy