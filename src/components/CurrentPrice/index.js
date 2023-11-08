import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = TestIds.BANNER;

export function CurrentPrice(props) {
    return(
        <View style={styles.headerPrice}>
            <BannerAd 
                unitId={adUnitId}
                size={BannerAdSize}
                requestOptions={{
                requestNonPersonalizedAdsOnly: true,
                }}
            />
            <Text style={styles.textPrice}>Anúncio</Text>
            <Text style={styles.currentPrice}>${props.lastCotation}</Text>
            <Text style={styles.textPrice}>Ultima Cotação do Dólar</Text>
        </View>
    )
}