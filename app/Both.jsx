import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';

export default function CompareResult({ route }) {
    const { car1, car2 } = route.params;

    if (!car1 || !car2) {
        return (
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <Text style={styles.errorText}>Both cars need to be selected to compare.</Text>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.compareContainer}>
                    <View style={styles.carContainer}>
                        <Image source={{ uri: car1.image }} style={styles.image} />
                        <View style={styles.carDetails}>
                            <Text style={styles.modelName}>{car1.model} ({car1.year})</Text>
                            <Text style={styles.detailText}>Variant: {car1.variant.variant}</Text>
                            <Text style={styles.detailText}>Price: {car1.variant.price}</Text>
                            <Text style={styles.detailText}>Engine: {car1.engine}</Text>
                            <Text style={styles.detailText}>Transmission: {car1.transmission}</Text>
                            <Text style={styles.detailText}>Color: {car1.color}</Text>
                        </View>
                    </View>
                    <View style={styles.carContainer}>
                        <Image source={{ uri: car2.image }} style={styles.image} />
                        <View style={styles.carDetails}>
                            <Text style={styles.modelName}>{car2.model} ({car2.year})</Text>
                            <Text style={styles.detailText}>Variant: {car2.variant.variant}</Text>
                            <Text style={styles.detailText}>Price: {car2.variant.price}</Text>
                            <Text style={styles.detailText}>Engine: {car2.engine}</Text>
                            <Text style={styles.detailText}>Transmission: {car2.transmission}</Text>
                            <Text style={styles.detailText}>Color: {car2.color}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        padding: 20,
        flexGrow: 1,
    },
    compareContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    carContainer: {
        flex: 1,
        marginHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
        padding: 15,
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
    },
    carDetails: {
        flex: 1,
    },
    modelName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    detailText: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
    },
    errorText: {
        fontSize: 18,
        color: '#ff0000',
        textAlign: 'center',
    },
});
