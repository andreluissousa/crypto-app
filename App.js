import React, { useState, useEffect } from "react";
import { StyleSheet, Text, StatusBar, SafeAreaView, Platform, ActivityIndicator } from "react-native";
import { CurrentPrice } from "./src/components/CurrentPrice";
import { HistoryGraphic } from "./src/components/HistoryGraphic";
import { QuotationList } from "./src/components/QuotationList";
import { BannerAd, BannerAdSize, TestIds, InterstitialAd, AdEventType } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-6769657972383152~5898379304';
const adIntentionalId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-6769657972383152~5898379304';

const interstitial = InterstitialAd.createForAdRequest(adIntentionalId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['Finance', 'Cotation'],
});

function url(qtdDays) {
  
  return `https://economia.awesomeapi.com.br/json/daily/USD-BRL/${qtdDays}`
}

async function getListCoins(url) {
  let response = await fetch(url);
  let returnApi = await response.json();
  let selectListQuotations = returnApi;
  
  const queryCoinsList = [];
  
  for (const cotation of selectListQuotations) {
    const date = new Date(0);
    date.setUTCSeconds(cotation.timestamp);
    queryCoinsList.push({
      valor: parseFloat(cotation.bid).toFixed(3),
      data: formatDate(date),
    });
  }
  
  let data = queryCoinsList;
  return data;
}

function formatDate(date) {
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1; // Adicione 1 porque os meses são zero indexados
  const year = date.getUTCFullYear();

  return `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
}

async function getPriceCoinsGraphic(url) {
  let responseG = await fetch(url);
  let returnApiG = await responseG.json();
  let selectListQuotationsG = returnApiG;
  if (Array.isArray(returnApiG) && selectListQuotationsG.length > 0) {
    const queryCoinsListG = returnApiG.map((cotation) => parseFloat(cotation.bid).toFixed(3));
    return queryCoinsListG.reverse();
  } else {
    console.error("API response does not contain valid data.");
    return [];
  }
}

export default function App() {
  const[coinsList, setCoinsList] = useState([]);
  const[coinsGraphicList, setCoinsGraphicList] = useState([0]);
  const[days, setDays] = useState(7);
  const[updateData, setUpdateData] = useState(true);
  const[price, setPrice] = useState();
  const [dataFetched, setDataFetched] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);
  
  function updateDay(number) {
    setDays(number);
    setUpdateData(true);
  }

  async function priceContation() {
    if (dataFetched) {
      setPrice(coinsGraphicList[coinsGraphicList.length - 1]);
    }
  }
  
  const fetchData = async () => {
    setIsLoading(true);

    interstitial.load();
    
    interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true)
      interstitial.show();
    });
    
    const data = await getListCoins(url(days));
    setCoinsList(data);
    setDataFetched(true);
    
    const dataG = await getPriceCoinsGraphic(url(days));
    setCoinsGraphicList(dataG);
    setDataFetched(true);
    
    priceContation();
    
    if (updateData) {
      setUpdateData(false);
    }
    
    setIsLoading(false);
  };
    
  useEffect(() => {
    fetchData();
  }, [updateData]);
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        backgroundColor="#f50d41"
      />
      <CurrentPrice lastCotation={price}/>
      {isLoading ? ( // Renderize o indicador de carregamento enquanto isLoading for true
        <ActivityIndicator size="large" color="#f50d41" />
      ) : (
        <>
          <HistoryGraphic infoDataGraphic={coinsGraphicList}/>
          <QuotationList filterDay={updateDay} listTransactions={coinsList}/>
        </>
      )}
      <BannerAd 
        unitId={adUnitId}
        size={BannerAdSize.BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40 : 0
  }
})